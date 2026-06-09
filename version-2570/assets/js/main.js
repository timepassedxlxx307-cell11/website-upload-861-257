(function () {
  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
      return;
    }
    document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    var header = document.querySelector("[data-header]");
    var menuToggle = document.querySelector("[data-menu-toggle]");
    var mobileMenu = document.querySelector("[data-mobile-menu]");

    function refreshHeader() {
      if (!header) {
        return;
      }
      if (window.scrollY > 20) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    }

    refreshHeader();
    window.addEventListener("scroll", refreshHeader, { passive: true });

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("is-open");
      });
    }

    initHero();
    initSiteSearch();
    initPageFilter();
  });

  function initHero() {
    var hero = document.querySelector("[data-hero]");
    if (!hero) {
      return;
    }

    var slides = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-slide]"));
    var dots = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-dot]"));
    var prev = hero.querySelector("[data-hero-prev]");
    var next = hero.querySelector("[data-hero-next]");
    var index = 0;
    var timer = null;

    function show(nextIndex) {
      if (!slides.length) {
        return;
      }
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle("is-active", i === index);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === index);
      });
    }

    function restart() {
      if (timer) {
        window.clearInterval(timer);
      }
      timer = window.setInterval(function () {
        show(index + 1);
      }, 5200);
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        show(i);
        restart();
      });
    });

    if (prev) {
      prev.addEventListener("click", function () {
        show(index - 1);
        restart();
      });
    }

    if (next) {
      next.addEventListener("click", function () {
        show(index + 1);
        restart();
      });
    }

    show(0);
    restart();
  }

  function initSiteSearch() {
    var inputs = Array.prototype.slice.call(document.querySelectorAll("[data-site-search]"));
    if (!inputs.length || typeof SEARCH_MOVIES === "undefined") {
      return;
    }

    inputs.forEach(function (input) {
      var holder = input.parentElement;
      var panel = holder ? holder.querySelector("[data-search-panel]") : null;
      if (!panel && input.nextElementSibling && input.nextElementSibling.matches("[data-search-panel]")) {
        panel = input.nextElementSibling;
      }
      if (!panel) {
        return;
      }

      input.addEventListener("input", function () {
        var query = input.value.trim().toLowerCase();
        if (!query) {
          panel.classList.remove("is-open");
          panel.innerHTML = "";
          return;
        }

        var results = SEARCH_MOVIES.filter(function (item) {
          return item.t.toLowerCase().indexOf(query) !== -1 ||
            item.r.toLowerCase().indexOf(query) !== -1 ||
            item.y.toLowerCase().indexOf(query) !== -1 ||
            item.g.toLowerCase().indexOf(query) !== -1;
        }).slice(0, 12);

        panel.innerHTML = results.map(function (item) {
          return '<a class="search-result" href="' + item.u + '">' +
            '<img src="' + item.c + '" alt="' + escapeHtml(item.t) + '">' +
            '<span><strong>' + escapeHtml(item.t) + '</strong><span>' + escapeHtml(item.r + ' · ' + item.y + ' · ' + item.g) + '</span></span>' +
            '</a>';
        }).join("");

        panel.classList.toggle("is-open", results.length > 0);
      });
    });

    document.addEventListener("click", function (event) {
      document.querySelectorAll("[data-search-panel]").forEach(function (panel) {
        if (!panel.parentElement || !panel.parentElement.contains(event.target)) {
          panel.classList.remove("is-open");
        }
      });
    });
  }

  function initPageFilter() {
    var input = document.querySelector("[data-page-filter]");
    var grid = document.querySelector("[data-filter-grid]");
    if (!input || !grid) {
      return;
    }

    var empty = document.querySelector("[data-empty-state]");
    var cards = Array.prototype.slice.call(grid.children);

    input.addEventListener("input", function () {
      var query = input.value.trim().toLowerCase();
      var visible = 0;

      cards.forEach(function (card) {
        var text = [
          card.getAttribute("data-title"),
          card.getAttribute("data-region"),
          card.getAttribute("data-year"),
          card.getAttribute("data-genre"),
          card.textContent
        ].join(" ").toLowerCase();
        var match = !query || text.indexOf(query) !== -1;
        card.style.display = match ? "" : "none";
        if (match) {
          visible += 1;
        }
      });

      if (empty) {
        empty.classList.toggle("is-visible", visible === 0);
      }
    });
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  window.initMoviePlayer = function (videoId, buttonId, source) {
    var video = document.getElementById(videoId);
    var button = document.getElementById(buttonId);
    if (!video || !button || !source) {
      return;
    }

    var loaded = false;
    var hls = null;

    function attach() {
      if (loaded) {
        return;
      }
      loaded = true;
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = source;
      } else if (window.Hls && window.Hls.isSupported()) {
        hls = new window.Hls({ enableWorker: true });
        hls.loadSource(source);
        hls.attachMedia(video);
      } else {
        video.src = source;
      }
    }

    function play() {
      attach();
      button.classList.add("is-hidden");
      video.controls = true;
      var promise = video.play();
      if (promise && promise.catch) {
        promise.catch(function () {});
      }
    }

    button.addEventListener("click", play);
    video.addEventListener("click", function () {
      if (!loaded) {
        play();
      }
    });
    video.addEventListener("ended", function () {
      if (hls && hls.stopLoad) {
        hls.stopLoad();
      }
    });
  };
})();
