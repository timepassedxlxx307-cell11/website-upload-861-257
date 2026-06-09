(function () {
  var header = document.querySelector('[data-header]');
  var menuButton = document.querySelector('[data-menu-toggle]');
  var mobileNav = document.querySelector('[data-mobile-nav]');

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', function () {
      mobileNav.classList.toggle('is-open');
    });
  }

  var hero = document.querySelector('[data-hero]');
  if (hero) {
    var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
    var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
    var title = hero.querySelector('[data-hero-title]');
    var desc = hero.querySelector('[data-hero-desc]');
    var link = hero.querySelector('[data-hero-link]');
    var category = hero.querySelector('[data-hero-category]');
    var current = 0;

    function setHero(index) {
      if (!slides.length) return;
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle('is-active', i === current);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === current);
      });
      var active = slides[current];
      if (title) title.textContent = active.getAttribute('data-title') || '';
      if (desc) desc.textContent = active.getAttribute('data-desc') || '';
      if (category) category.textContent = active.getAttribute('data-category') || '';
      if (link) link.setAttribute('href', active.getAttribute('data-link') || '#');
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        setHero(i);
      });
    });

    setHero(0);
    window.setInterval(function () {
      setHero(current + 1);
    }, 5000);
  }

  var grids = Array.prototype.slice.call(document.querySelectorAll('[data-filter-grid]'));
  grids.forEach(function (grid) {
    var scope = grid.closest('[data-filter-scope]') || document;
    var search = scope.querySelector('[data-search-input]');
    var region = scope.querySelector('[data-region-filter]');
    var year = scope.querySelector('[data-year-filter]');
    var empty = scope.querySelector('[data-empty-state]');
    var cards = Array.prototype.slice.call(grid.querySelectorAll('[data-movie-card]'));

    function textOf(card) {
      return [
        card.getAttribute('data-title'),
        card.getAttribute('data-region'),
        card.getAttribute('data-year'),
        card.getAttribute('data-genre'),
        card.getAttribute('data-tags')
      ].join(' ').toLowerCase();
    }

    function applyFilter() {
      var q = search ? search.value.trim().toLowerCase() : '';
      var r = region ? region.value : '';
      var y = year ? year.value : '';
      var shown = 0;

      cards.forEach(function (card) {
        var okText = !q || textOf(card).indexOf(q) !== -1;
        var okRegion = !r || card.getAttribute('data-region') === r;
        var okYear = !y || card.getAttribute('data-year') === y;
        var ok = okText && okRegion && okYear;
        card.classList.toggle('is-hidden-card', !ok);
        if (ok) shown += 1;
      });

      if (empty) {
        empty.classList.toggle('is-visible', shown === 0);
      }
    }

    if (search) search.addEventListener('input', applyFilter);
    if (region) region.addEventListener('change', applyFilter);
    if (year) year.addEventListener('change', applyFilter);
    applyFilter();
  });

  var viewScopes = Array.prototype.slice.call(document.querySelectorAll('[data-view-scope]'));
  viewScopes.forEach(function (scope) {
    var grid = scope.querySelector('[data-filter-grid]');
    var buttons = Array.prototype.slice.call(scope.querySelectorAll('[data-view]'));
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        if (!grid) return;
        buttons.forEach(function (item) {
          item.classList.remove('is-active');
        });
        button.classList.add('is-active');
        grid.classList.toggle('list-view', button.getAttribute('data-view') === 'list');
      });
    });
  });
})();
