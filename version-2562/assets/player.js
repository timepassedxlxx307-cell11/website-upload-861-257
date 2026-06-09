(function () {
  function initPlayer(box) {
    var video = box.querySelector('video');
    var overlay = box.querySelector('[data-player-overlay]');
    var button = box.querySelector('[data-player-button]');
    var url = video ? video.getAttribute('data-video') : '';
    var attached = false;
    var hls = null;

    function attach() {
      if (attached || !video || !url) return;
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
      } else if (window.Hls && window.Hls.isSupported()) {
        hls = new window.Hls({ enableWorker: true, lowLatencyMode: true, backBufferLength: 90 });
        hls.loadSource(url);
        hls.attachMedia(video);
      } else {
        video.src = url;
      }
      attached = true;
    }

    function play() {
      attach();
      if (overlay) overlay.classList.add('is-hidden');
      if (video) {
        video.setAttribute('controls', 'controls');
        var run = video.play();
        if (run && typeof run.catch === 'function') {
          run.catch(function () {});
        }
      }
    }

    if (button) button.addEventListener('click', play);
    if (overlay) overlay.addEventListener('click', play);
    if (video) {
      video.addEventListener('click', function () {
        if (!attached || video.paused) play();
      });
      video.addEventListener('play', function () {
        if (overlay) overlay.classList.add('is-hidden');
      });
    }

    window.addEventListener('pagehide', function () {
      if (hls && typeof hls.destroy === 'function') {
        hls.destroy();
      }
    });
  }

  Array.prototype.slice.call(document.querySelectorAll('[data-player]')).forEach(initPlayer);
})();
