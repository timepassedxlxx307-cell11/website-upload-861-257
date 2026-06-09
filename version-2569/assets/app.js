(function () {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-site-nav]');

  function updateHeader() {
    if (!header) {
      return;
    }
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  }

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
    });
  }

  document.querySelectorAll('[data-hero]').forEach(function (hero) {
    const slides = Array.from(hero.querySelectorAll('[data-hero-slide]'));
    const dots = Array.from(hero.querySelectorAll('[data-hero-dot]'));
    const prev = hero.querySelector('[data-hero-prev]');
    const next = hero.querySelector('[data-hero-next]');
    let current = 0;
    let timer;

    function show(index) {
      if (!slides.length) {
        return;
      }
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('is-active', slideIndex === current);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('is-active', dotIndex === current);
      });
    }

    function start() {
      window.clearInterval(timer);
      timer = window.setInterval(function () {
        show(current + 1);
      }, 5200);
    }

    if (prev) {
      prev.addEventListener('click', function () {
        show(current - 1);
        start();
      });
    }

    if (next) {
      next.addEventListener('click', function () {
        show(current + 1);
        start();
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        show(Number(dot.getAttribute('data-hero-dot')));
        start();
      });
    });

    show(0);
    start();
  });

  document.querySelectorAll('[data-search-scope]').forEach(function (scope) {
    const input = scope.querySelector('[data-search-input]');
    const typeFilter = scope.querySelector('[data-filter-type]');
    const yearFilter = scope.querySelector('[data-filter-year]');
    const cards = Array.from(scope.querySelectorAll('.movie-card, .rank-card'));

    function norm(value) {
      return String(value || '').trim().toLowerCase();
    }

    function apply() {
      const query = norm(input ? input.value : '');
      const type = typeFilter ? typeFilter.value : '';
      const year = yearFilter ? yearFilter.value : '';

      cards.forEach(function (card) {
        const text = norm([
          card.getAttribute('data-title'),
          card.getAttribute('data-year'),
          card.getAttribute('data-type'),
          card.getAttribute('data-region'),
          card.getAttribute('data-tags')
        ].join(' '));
        const passQuery = !query || text.indexOf(query) !== -1;
        const passType = !type || card.getAttribute('data-type') === type;
        const passYear = !year || card.getAttribute('data-year') === year;
        card.classList.toggle('is-filtered-out', !(passQuery && passType && passYear));
      });
    }

    if (input) {
      input.addEventListener('input', apply);
    }
    if (typeFilter) {
      typeFilter.addEventListener('change', apply);
    }
    if (yearFilter) {
      yearFilter.addEventListener('change', apply);
    }
  });
}());
