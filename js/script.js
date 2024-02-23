document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const playBtn = document.getElementById('playBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const videoPlayer = document.getElementById('videoPlayer');

    // Video dosyası seçildiğinde
    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        videoPlayer.src = url;
    });

    // // Oynat/Duraklat butonu
    // playBtn.addEventListener('click', function () {
    //     if (videoPlayer.paused) {
    //         videoPlayer.play();
    //         playBtn.textContent = 'Duraklat';
    //     } else {
    //         videoPlayer.pause();
    //         playBtn.textContent = 'Oynat';
    //     }
    // });

    // // Tam ekran butonu
    // fullscreenBtn.addEventListener('click', function () {
    //     if (videoPlayer.requestFullscreen) {
    //         videoPlayer.requestFullscreen();
    //     } else if (videoPlayer.webkitRequestFullscreen) { /* Safari */
    //         videoPlayer.webkitRequestFullscreen();
    //     } else if (videoPlayer.msRequestFullscreen) { /* IE11 */
    //         videoPlayer.msRequestFullscreen();
    //     }
    // });
});
