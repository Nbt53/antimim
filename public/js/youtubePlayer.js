let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player-container', {
    videoId: '3FON9Z3PcMY', // Replace with your YouTube video ID
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  resizeVideoPlayer();
  window.addEventListener('resize', resizeVideoPlayer);
}

function resizeVideoPlayer() {
  const container = document.getElementById('player-container');
  const containerWidth = container.offsetWidth;
  const containerHeight = containerWidth * 0.5625; // 16:9 aspect ratio

  player.setSize(containerWidth, containerHeight);
}

