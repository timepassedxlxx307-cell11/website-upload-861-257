(function () {
    const menuButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.site-nav');

    if (menuButton && nav) {
        menuButton.addEventListener('click', function () {
            const isOpen = nav.classList.toggle('is-open');
            menuButton.setAttribute('aria-expanded', String(isOpen));
        });
    }

    const slides = Array.from(document.querySelectorAll('.hero-slide'));
    const dots = Array.from(document.querySelectorAll('.hero-dot'));
    let activeSlide = 0;

    function showSlide(index) {
        if (!slides.length) {
            return;
        }
        activeSlide = (index + slides.length) % slides.length;
        slides.forEach(function (slide, slideIndex) {
            slide.classList.toggle('is-active', slideIndex === activeSlide);
        });
        dots.forEach(function (dot, dotIndex) {
            dot.classList.toggle('is-active', dotIndex === activeSlide);
        });
    }

    dots.forEach(function (dot, index) {
        dot.addEventListener('click', function () {
            showSlide(index);
        });
    });

    if (slides.length > 1) {
        setInterval(function () {
            showSlide(activeSlide + 1);
        }, 5200);
    }

    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get('q') || '';
    const yearParam = params.get('year') || '';
    const liveSearch = document.querySelector('[data-live-search]');
    const yearSelect = document.querySelector('[data-year-filter]');
    const typeSelect = document.querySelector('[data-type-filter]');
    const clearButton = document.querySelector('[data-clear-filters]');
    const cards = Array.from(document.querySelectorAll('[data-search]'));
    const emptyState = document.querySelector('[data-no-results]');

    if (liveSearch && queryParam) {
        liveSearch.value = queryParam;
    }
    if (yearSelect && yearParam) {
        yearSelect.value = yearParam;
    }

    function normalize(value) {
        return String(value || '').trim().toLowerCase();
    }

    function applyFilters() {
        if (!cards.length) {
            return;
        }
        const keyword = normalize(liveSearch ? liveSearch.value : '');
        const yearValue = yearSelect ? yearSelect.value : '';
        const typeValue = typeSelect ? typeSelect.value : '';
        let visible = 0;

        cards.forEach(function (card) {
            const searchText = normalize(card.getAttribute('data-search'));
            const yearText = card.getAttribute('data-year') || '';
            const typeText = card.getAttribute('data-type') || '';
            const matched = (!keyword || searchText.indexOf(keyword) !== -1) && (!yearValue || yearText === yearValue) && (!typeValue || typeText === typeValue);
            card.style.display = matched ? '' : 'none';
            if (matched) {
                visible += 1;
            }
        });

        if (emptyState) {
            emptyState.style.display = visible ? 'none' : 'block';
        }
    }

    [liveSearch, yearSelect, typeSelect].forEach(function (control) {
        if (control) {
            control.addEventListener('input', applyFilters);
            control.addEventListener('change', applyFilters);
        }
    });

    if (clearButton) {
        clearButton.addEventListener('click', function () {
            if (liveSearch) {
                liveSearch.value = '';
            }
            if (yearSelect) {
                yearSelect.value = '';
            }
            if (typeSelect) {
                typeSelect.value = '';
            }
            applyFilters();
        });
    }

    applyFilters();

    const playerShell = document.querySelector('[data-player-shell]');

    if (playerShell) {
        const video = playerShell.querySelector('video');
        const overlay = playerShell.querySelector('.player-overlay');
        const button = playerShell.querySelector('.play-button');
        let loaded = false;
        let hlsInstance = null;

        function loadVideo() {
            if (!video || loaded) {
                return;
            }
            const stream = video.getAttribute('data-stream');
            if (!stream) {
                return;
            }
            if (window.Hls && window.Hls.isSupported()) {
                hlsInstance = new window.Hls({ enableWorker: true });
                hlsInstance.loadSource(stream);
                hlsInstance.attachMedia(video);
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = stream;
            } else {
                video.src = stream;
            }
            loaded = true;
        }

        function beginPlayback() {
            loadVideo();
            if (!video) {
                return;
            }
            const playResult = video.play();
            if (playResult && typeof playResult.then === 'function') {
                playResult.then(function () {
                    playerShell.classList.add('is-playing');
                }).catch(function () {
                    playerShell.classList.remove('is-playing');
                });
            } else {
                playerShell.classList.add('is-playing');
            }
        }

        if (button) {
            button.addEventListener('click', function (event) {
                event.preventDefault();
                beginPlayback();
            });
        }
        if (overlay) {
            overlay.addEventListener('click', function (event) {
                event.preventDefault();
                beginPlayback();
            });
        }
        if (video) {
            video.addEventListener('play', function () {
                playerShell.classList.add('is-playing');
            });
            video.addEventListener('pause', function () {
                playerShell.classList.remove('is-playing');
            });
            video.addEventListener('ended', function () {
                playerShell.classList.remove('is-playing');
            });
            video.addEventListener('click', function () {
                if (video.paused) {
                    beginPlayback();
                }
            });
        }
        window.addEventListener('beforeunload', function () {
            if (hlsInstance) {
                hlsInstance.destroy();
            }
        });
    }
}());
