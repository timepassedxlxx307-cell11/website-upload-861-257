import { H as Hls } from "./hls-dru42stk.js";

const SELECTORS = {
    menuToggle: "[data-menu-toggle]",
    mobileNav: "[data-mobile-nav]",
    hero: "[data-hero]",
    heroSlide: "[data-hero-slide]",
    heroDot: "[data-hero-dot]",
    searchInput: "[data-search-input]",
    filterRegion: "[data-filter-region]",
    filterYear: "[data-filter-year]",
    card: ".js-movie-card",
    emptyResult: "[data-empty-result]",
    playButton: "[data-play-button]",
    player: ".movie-player",
    playerNote: "[data-player-note]"
};

function setupNavigation() {
    const toggle = document.querySelector(SELECTORS.menuToggle);
    const nav = document.querySelector(SELECTORS.mobileNav);

    if (!toggle || !nav) {
        return;
    }

    toggle.addEventListener("click", () => {
        nav.classList.toggle("is-open");
    });
}

function setupHero() {
    const hero = document.querySelector(SELECTORS.hero);

    if (!hero) {
        return;
    }

    const slides = Array.from(hero.querySelectorAll(SELECTORS.heroSlide));
    const dots = Array.from(hero.querySelectorAll(SELECTORS.heroDot));

    if (slides.length <= 1) {
        return;
    }

    let activeIndex = 0;
    let timer = null;

    function setActive(index) {
        activeIndex = (index + slides.length) % slides.length;

        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle("is-active", slideIndex === activeIndex);
        });

        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle("is-active", dotIndex === activeIndex);
        });
    }

    function startAutoPlay() {
        stopAutoPlay();
        timer = window.setInterval(() => {
            setActive(activeIndex + 1);
        }, 5200);
    }

    function stopAutoPlay() {
        if (timer) {
            window.clearInterval(timer);
            timer = null;
        }
    }

    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            const index = Number(dot.dataset.heroDot || "0");
            setActive(index);
            startAutoPlay();
        });
    });

    hero.addEventListener("mouseenter", stopAutoPlay);
    hero.addEventListener("mouseleave", startAutoPlay);
    startAutoPlay();
}

function normalizeText(value) {
    return String(value || "").trim().toLowerCase();
}

function setupSearchAndFilters() {
    const inputs = Array.from(document.querySelectorAll(SELECTORS.searchInput));

    if (!inputs.length) {
        return;
    }

    const regionSelect = document.querySelector(SELECTORS.filterRegion);
    const yearSelect = document.querySelector(SELECTORS.filterYear);
    const cards = Array.from(document.querySelectorAll(SELECTORS.card));
    const emptyResult = document.querySelector(SELECTORS.emptyResult);

    function currentQuery() {
        return inputs.map((input) => normalizeText(input.value)).filter(Boolean).join(" ");
    }

    function filterCards() {
        const query = currentQuery();
        const region = normalizeText(regionSelect ? regionSelect.value : "");
        const year = normalizeText(yearSelect ? yearSelect.value : "");
        let visibleCount = 0;

        cards.forEach((card) => {
            const haystack = normalizeText([
                card.dataset.title,
                card.dataset.region,
                card.dataset.year,
                card.dataset.category,
                card.dataset.tags
            ].join(" "));

            const matchesQuery = !query || haystack.includes(query);
            const matchesRegion = !region || normalizeText(card.dataset.region) === region;
            const matchesYear = !year || normalizeText(card.dataset.year) === year;
            const visible = matchesQuery && matchesRegion && matchesYear;

            card.hidden = !visible;

            if (visible) {
                visibleCount += 1;
            }
        });

        if (emptyResult) {
            emptyResult.hidden = visibleCount !== 0;
        }
    }

    inputs.forEach((input) => {
        input.addEventListener("input", filterCards);
    });

    if (regionSelect) {
        regionSelect.addEventListener("change", filterCards);
    }

    if (yearSelect) {
        yearSelect.addEventListener("change", filterCards);
    }
}

function setupPlayer() {
    const player = document.querySelector(SELECTORS.player);
    const button = document.querySelector(SELECTORS.playButton);
    const note = document.querySelector(SELECTORS.playerNote);

    if (!player || !button) {
        return;
    }

    const source = player.dataset.src;
    let hlsInstance = null;
    let hasLoaded = false;

    function setNote(message) {
        if (note) {
            note.textContent = message;
        }
    }

    async function startPlayback() {
        if (!source) {
            setNote("当前影片暂无可用播放源。");
            return;
        }

        button.classList.add("is-hidden");
        player.crossOrigin = "anonymous";

        if (!hasLoaded) {
            if (player.canPlayType("application/vnd.apple.mpegurl")) {
                player.src = source;
                hasLoaded = true;
            } else if (Hls && Hls.isSupported()) {
                hlsInstance = new Hls({
                    enableWorker: true,
                    lowLatencyMode: true,
                    backBufferLength: 90
                });
                hlsInstance.loadSource(source);
                hlsInstance.attachMedia(player);
                hlsInstance.on(Hls.Events.ERROR, (event, data) => {
                    if (data && data.fatal) {
                        setNote("播放源加载异常，请刷新页面或稍后再试。");
                    }
                });
                hasLoaded = true;
            } else {
                setNote("当前浏览器暂不支持 HLS 播放，请更换现代浏览器访问。");
                button.classList.remove("is-hidden");
                return;
            }
        }

        try {
            await player.play();
            setNote("正在播放 HLS 高清视频源。");
        } catch (error) {
            setNote("浏览器阻止自动播放，请再次点击视频播放按钮。");
            button.classList.remove("is-hidden");
        }
    }

    button.addEventListener("click", startPlayback);

    player.addEventListener("play", () => {
        button.classList.add("is-hidden");
    });

    player.addEventListener("pause", () => {
        if (!player.ended) {
            setNote("播放已暂停，可点击播放器继续观看。");
        }
    });

    window.addEventListener("beforeunload", () => {
        if (hlsInstance) {
            hlsInstance.destroy();
        }
    });
}

function boot() {
    setupNavigation();
    setupHero();
    setupSearchAndFilters();
    setupPlayer();
}

document.addEventListener("DOMContentLoaded", boot);
