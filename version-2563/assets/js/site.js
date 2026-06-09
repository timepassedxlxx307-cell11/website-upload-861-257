(function () {
  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  ready(function () {
    var toggle = document.querySelector(".menu-toggle");
    var mobileNav = document.querySelector(".mobile-nav");

    if (toggle && mobileNav) {
      toggle.addEventListener("click", function () {
        var open = mobileNav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    var slides = Array.prototype.slice.call(document.querySelectorAll(".hero-slide"));
    var dots = Array.prototype.slice.call(document.querySelectorAll(".hero-dot"));
    var current = 0;
    var timer = null;

    function showSlide(index) {
      if (!slides.length) {
        return;
      }

      current = (index + slides.length) % slides.length;

      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("active", slideIndex === current);
      });

      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("active", dotIndex === current);
      });
    }

    function startCarousel() {
      if (slides.length < 2) {
        return;
      }

      timer = window.setInterval(function () {
        showSlide(current + 1);
      }, 5200);
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        var index = Number(dot.getAttribute("data-slide") || 0);
        window.clearInterval(timer);
        showSlide(index);
        startCarousel();
      });
    });

    showSlide(0);
    startCarousel();

    Array.prototype.slice.call(document.querySelectorAll(".filter-scope")).forEach(function (scope) {
      var search = scope.querySelector(".filter-search");
      var selects = Array.prototype.slice.call(scope.querySelectorAll(".filter-select"));
      var cards = Array.prototype.slice.call(scope.querySelectorAll(".movie-card"));
      var emptyState = scope.querySelector(".empty-state");

      function includesValue(source, value) {
        if (!value) {
          return true;
        }

        return String(source || "").toLowerCase().indexOf(String(value).toLowerCase()) !== -1;
      }

      function applyFilters() {
        var query = search ? search.value.trim().toLowerCase() : "";
        var visibleCount = 0;

        cards.forEach(function (card) {
          var haystack = [
            card.getAttribute("data-title"),
            card.getAttribute("data-region"),
            card.getAttribute("data-type"),
            card.getAttribute("data-year"),
            card.getAttribute("data-genre")
          ].join(" ").toLowerCase();

          var matched = !query || haystack.indexOf(query) !== -1;

          selects.forEach(function (select) {
            var filterName = select.getAttribute("data-filter");
            var value = select.value;

            if (!value) {
              return;
            }

            if (filterName === "region") {
              matched = matched && includesValue(card.getAttribute("data-region"), value);
            }

            if (filterName === "type") {
              matched = matched && includesValue(card.getAttribute("data-type"), value);
            }

            if (filterName === "year") {
              matched = matched && includesValue(card.getAttribute("data-year"), value);
            }

            if (filterName === "category") {
              matched = matched && includesValue(card.getAttribute("data-category"), value);
            }
          });

          card.hidden = !matched;

          if (matched) {
            visibleCount += 1;
          }
        });

        if (emptyState) {
          emptyState.hidden = visibleCount !== 0;
        }
      }

      if (search) {
        search.addEventListener("input", applyFilters);
      }

      selects.forEach(function (select) {
        select.addEventListener("change", applyFilters);
      });
    });
  });
})();

function initMoviePlayer(source, videoId, overlayId) {
  var video = document.getElementById(videoId);
  var overlay = document.getElementById(overlayId);
  var hlsInstance = null;
  var initialized = false;

  if (!video || !source) {
    return;
  }

  function attachSource() {
    if (initialized) {
      return;
    }

    initialized = true;
    video.controls = true;
    video.playsInline = true;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = source;
      return;
    }

    if (window.Hls && window.Hls.isSupported()) {
      hlsInstance = new window.Hls({
        enableWorker: true,
        lowLatencyMode: true
      });
      hlsInstance.loadSource(source);
      hlsInstance.attachMedia(video);
      return;
    }

    video.src = source;
  }

  function startPlayback() {
    attachSource();

    if (overlay) {
      overlay.classList.add("hidden");
    }

    var playPromise = video.play();

    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function () {
        if (overlay) {
          overlay.classList.remove("hidden");
        }
      });
    }
  }

  if (overlay) {
    overlay.addEventListener("click", startPlayback);
  }

  video.addEventListener("click", function () {
    if (!initialized) {
      startPlayback();
    }
  });

  window.addEventListener("beforeunload", function () {
    if (hlsInstance) {
      hlsInstance.destroy();
    }
  });
}
