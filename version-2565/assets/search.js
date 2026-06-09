(function () {
    var form = document.getElementById('search-form');
    var input = document.getElementById('search-input');
    var typeFilter = document.getElementById('type-filter');
    var yearFilter = document.getElementById('year-filter');
    var results = document.getElementById('search-results');
    var params = new URLSearchParams(window.location.search);

    function escapeHtml(value) {
        return String(value || '').replace(/[&<>"]/g, function (match) {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;'
            }[match];
        });
    }

    function movieMarkup(movie) {
        var tags = movie.tags.slice(0, 3).map(function (tag) {
            return '<span>' + escapeHtml(tag) + '</span>';
        }).join('');
        return [
            '<article class="movie-card">',
            '    <a class="poster-link" href="' + escapeHtml(movie.url) + '">',
            '        <span class="poster-frame">',
            '            <img src="' + escapeHtml(movie.image) + '" alt="' + escapeHtml(movie.title) + '" loading="lazy" />',
            '            <span class="poster-shade"></span>',
            '            <span class="play-dot">▶</span>',
            '        </span>',
            '    </a>',
            '    <div class="card-body">',
            '        <div class="card-meta"><span>' + escapeHtml(movie.year) + '</span><span>' + escapeHtml(movie.region) + '</span><span>' + escapeHtml(movie.type) + '</span></div>',
            '        <h3><a href="' + escapeHtml(movie.url) + '">' + escapeHtml(movie.title) + '</a></h3>',
            '        <p>' + escapeHtml(movie.oneLine) + '</p>',
            '        <div class="tag-row">' + tags + '</div>',
            '    </div>',
            '</article>'
        ].join('');
    }

    function search() {
        var keyword = input.value.trim().toLowerCase();
        var selectedType = typeFilter.value;
        var selectedYear = yearFilter.value;
        var matched = MOVIES.filter(function (movie) {
            var text = [
                movie.title,
                movie.year,
                movie.region,
                movie.type,
                movie.genre,
                movie.category,
                movie.tags.join(' '),
                movie.oneLine
            ].join(' ').toLowerCase();
            var keywordOk = !keyword || text.indexOf(keyword) !== -1;
            var typeOk = !selectedType || movie.type === selectedType;
            var yearOk = !selectedYear || movie.year === selectedYear;
            return keywordOk && typeOk && yearOk;
        }).slice(0, 120);
        results.innerHTML = matched.map(movieMarkup).join('');
    }

    if (input) {
        input.value = params.get('q') || '';
        input.addEventListener('input', search);
    }

    if (typeFilter) {
        typeFilter.addEventListener('change', search);
    }

    if (yearFilter) {
        yearFilter.addEventListener('change', search);
    }

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            search();
            var url = new URL(window.location.href);
            if (input.value.trim()) {
                url.searchParams.set('q', input.value.trim());
            } else {
                url.searchParams.delete('q');
            }
            history.replaceState(null, '', url.toString());
        });
    }

    search();
})();
