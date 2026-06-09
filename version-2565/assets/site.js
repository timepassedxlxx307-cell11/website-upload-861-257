(function () {
    var menuButton = document.querySelector('.menu-button');
    var mobilePanel = document.querySelector('.mobile-panel');

    if (menuButton && mobilePanel) {
        menuButton.addEventListener('click', function () {
            var opened = mobilePanel.hasAttribute('hidden');
            if (opened) {
                mobilePanel.removeAttribute('hidden');
                menuButton.setAttribute('aria-expanded', 'true');
                menuButton.textContent = '×';
            } else {
                mobilePanel.setAttribute('hidden', '');
                menuButton.setAttribute('aria-expanded', 'false');
                menuButton.textContent = '☰';
            }
        });
    }

    var hero = document.querySelector('[data-hero]');
    if (hero) {
        var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
        var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
        var prev = hero.querySelector('[data-hero-prev]');
        var next = hero.querySelector('[data-hero-next]');
        var current = 0;
        var timer;

        function show(index) {
            current = (index + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle('is-active', slideIndex === current);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle('is-active', dotIndex === current);
            });
        }

        function start() {
            stop();
            timer = window.setInterval(function () {
                show(current + 1);
            }, 5200);
        }

        function stop() {
            if (timer) {
                window.clearInterval(timer);
            }
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

        dots.forEach(function (dot, index) {
            dot.addEventListener('click', function () {
                show(index);
                start();
            });
        });

        hero.addEventListener('mouseenter', stop);
        hero.addEventListener('mouseleave', start);
        start();
    }

    var filterPanels = document.querySelectorAll('[data-filter-panel]');
    filterPanels.forEach(function (panel) {
        var input = panel.querySelector('[data-filter-input]');
        var year = panel.querySelector('[data-year-filter]');
        var cards = Array.prototype.slice.call(document.querySelectorAll('[data-card]'));

        function applyFilter() {
            var keyword = input ? input.value.trim().toLowerCase() : '';
            var selectedYear = year ? year.value : '';
            cards.forEach(function (card) {
                var content = [
                    card.getAttribute('data-title'),
                    card.getAttribute('data-year'),
                    card.getAttribute('data-region'),
                    card.getAttribute('data-type'),
                    card.getAttribute('data-genre'),
                    card.getAttribute('data-tags')
                ].join(' ').toLowerCase();
                var matchedKeyword = !keyword || content.indexOf(keyword) !== -1;
                var matchedYear = !selectedYear || card.getAttribute('data-year') === selectedYear;
                card.style.display = matchedKeyword && matchedYear ? '' : 'none';
            });
        }

        if (input) {
            input.addEventListener('input', applyFilter);
        }
        if (year) {
            year.addEventListener('change', applyFilter);
        }
    });
})();
