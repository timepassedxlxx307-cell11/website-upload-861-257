function initMoviePlayer(streamUrl) {
    var video = document.getElementById('movie-player');
    var overlay = document.getElementById('player-overlay');
    var hlsInstance = null;
    var loaded = false;

    function loadVideo() {
        if (!video || loaded) {
            return;
        }
        loaded = true;
        video.controls = true;

        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = streamUrl;
        } else if (window.Hls && window.Hls.isSupported()) {
            hlsInstance = new window.Hls({
                enableWorker: true,
                lowLatencyMode: true
            });
            hlsInstance.loadSource(streamUrl);
            hlsInstance.attachMedia(video);
        } else {
            video.src = streamUrl;
        }
    }

    function startPlayback() {
        loadVideo();
        if (overlay) {
            overlay.classList.add('is-hidden');
        }
        if (video) {
            var promise = video.play();
            if (promise && typeof promise.catch === 'function') {
                promise.catch(function () {});
            }
        }
    }

    if (overlay) {
        overlay.addEventListener('click', startPlayback);
    }

    if (video) {
        video.addEventListener('click', function () {
            if (!loaded) {
                startPlayback();
            }
        });
        video.addEventListener('ended', function () {
            if (hlsInstance) {
                hlsInstance.stopLoad();
            }
        });
    }
}
