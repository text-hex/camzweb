function goFullscreen() {
    const iframe = document.getElementById('gameIframe');

    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
    } else {
        alert("Your browser does not support the Fullscreen API.");
    }
}

<script>
    const music = document.getElementById("bgMusic");
    music.volume = 0.2;
</script>