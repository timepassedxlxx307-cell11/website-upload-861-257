(function () {
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('.hero-dot'));
  var index = 0;

  function showSlide(nextIndex) {
    if (!slides.length) {
      return;
    }

    index = (nextIndex + slides.length) % slides.length;
    slides.forEach(function (slide, slideIndex) {
      slide.classList.toggle('active', slideIndex === index);
    });
    dots.forEach(function (dot, dotIndex) {
      dot.classList.toggle('active', dotIndex === index);
    });
  }

  dots.forEach(function (dot, dotIndex) {
    dot.addEventListener('click', function () {
      showSlide(dotIndex);
    });
  });

  if (slides.length > 1) {
    window.setInterval(function () {
      showSlide(index + 1);
    }, 5200);
  }

  var form = document.querySelector('.top-search');
  if (form) {
    form.addEventListener('submit', function (event) {
      var input = form.querySelector('input[name="q"]');
      if (input && input.value.trim()) {
        event.preventDefault();
        var action = form.getAttribute('action') || './movies.html';
        window.location.href = action + '?q=' + encodeURIComponent(input.value.trim());
      }
    });
  }

  var searchInput = document.querySelector('[data-search-input]');
  var yearSelect = document.querySelector('[data-year-filter]');
  var genreSelect = document.querySelector('[data-genre-filter]');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.movie-card'));

  function normalize(value) {
    return String(value || '').toLowerCase().trim();
  }

  function applyQueryFromUrl() {
    if (!searchInput) {
      return;
    }

    var params = new URLSearchParams(window.location.search);
    var q = params.get('q');
    if (q) {
      searchInput.value = q;
    }
  }

  function filterCards() {
    if (!cards.length) {
      return;
    }

    var query = normalize(searchInput && searchInput.value);
    var selectedYear = normalize(yearSelect && yearSelect.value);
    var selectedGenre = normalize(genreSelect && genreSelect.value);

    cards.forEach(function (card) {
      var haystack = normalize([
        card.getAttribute('data-title'),
        card.getAttribute('data-region'),
        card.getAttribute('data-year'),
        card.getAttribute('data-genre'),
        card.getAttribute('data-tags'),
        card.textContent
      ].join(' '));
      var year = normalize(card.getAttribute('data-year'));
      var genre = normalize(card.getAttribute('data-genre'));
      var matchesQuery = !query || haystack.indexOf(query) !== -1;
      var matchesYear = !selectedYear || year.indexOf(selectedYear) !== -1;
      var matchesGenre = !selectedGenre || genre.indexOf(selectedGenre) !== -1;
      card.style.display = matchesQuery && matchesYear && matchesGenre ? '' : 'none';
    });
  }

  applyQueryFromUrl();
  [searchInput, yearSelect, genreSelect].forEach(function (control) {
    if (control) {
      control.addEventListener('input', filterCards);
      control.addEventListener('change', filterCards);
    }
  });
  filterCards();
})();
