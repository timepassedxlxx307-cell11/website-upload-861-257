(function () {
  function text(value) {
    return String(value || "").toLowerCase().trim();
  }

  function setMenu() {
    var button = document.querySelector("[data-menu-toggle]");
    var nav = document.querySelector("[data-mobile-nav]");
    if (!button || !nav) {
      return;
    }
    button.addEventListener("click", function () {
      nav.classList.toggle("is-open");
      document.body.classList.toggle("menu-open", nav.classList.contains("is-open"));
    });
  }

  function setHero() {
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

    function show(target) {
      if (!slides.length) {
        return;
      }
      index = (target + slides.length) % slides.length;
      slides.forEach(function (slide, pos) {
        slide.classList.toggle("is-active", pos === index);
      });
      dots.forEach(function (dot, pos) {
        dot.classList.toggle("is-active", pos === index);
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

    dots.forEach(function (dot, pos) {
      dot.addEventListener("click", function () {
        show(pos);
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

  function setFilters() {
    var areas = Array.prototype.slice.call(document.querySelectorAll("[data-filter-area]"));
    areas.forEach(function (area) {
      var input = area.querySelector("[data-filter-input]");
      var type = area.querySelector("[data-filter-type]");
      var year = area.querySelector("[data-filter-year]");
      var cards = Array.prototype.slice.call(area.querySelectorAll("[data-filter-card]"));

      function apply() {
        var query = input ? text(input.value) : "";
        var typeValue = type ? text(type.value) : "";
        var yearValue = year ? text(year.value) : "";
        cards.forEach(function (card) {
          var haystack = text(card.getAttribute("data-search"));
          var cardType = text(card.getAttribute("data-type"));
          var cardYear = text(card.getAttribute("data-year"));
          var matched = true;
          if (query && haystack.indexOf(query) === -1) {
            matched = false;
          }
          if (typeValue && cardType !== typeValue) {
            matched = false;
          }
          if (yearValue && cardYear !== yearValue) {
            matched = false;
          }
          card.hidden = !matched;
        });
      }

      if (input) {
        input.addEventListener("input", apply);
      }
      if (type) {
        type.addEventListener("change", apply);
      }
      if (year) {
        year.addEventListener("change", apply);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setMenu();
    setHero();
    setFilters();
  });
})();

function initMoviePlayer(source) {
  var video = document.querySelector("[data-player]");
  var trigger = document.querySelector("[data-player-trigger]");
  if (!video || !source) {
    return;
  }

  var attached = false;
  var hlsInstance = null;

  function attach() {
    if (attached) {
      return;
    }
    attached = true;
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = source;
      return;
    }
    if (window.Hls && window.Hls.isSupported()) {
      hlsInstance = new Hls();
      hlsInstance.loadSource(source);
      hlsInstance.attachMedia(video);
      return;
    }
    video.src = source;
  }

  function start() {
    attach();
    video.controls = true;
    if (trigger) {
      trigger.classList.add("is-hidden");
    }
    var promise = video.play();
    if (promise && promise.catch) {
      promise.catch(function () {});
    }
  }

  if (trigger) {
    trigger.addEventListener("click", start);
  }

  video.addEventListener("click", function () {
    if (!attached) {
      start();
      return;
    }
    if (video.paused) {
      var promise = video.play();
      if (promise && promise.catch) {
        promise.catch(function () {});
      }
    } else {
      video.pause();
    }
  });

  window.addEventListener("pagehide", function () {
    if (hlsInstance) {
      hlsInstance.destroy();
      hlsInstance = null;
    }
  });
}
