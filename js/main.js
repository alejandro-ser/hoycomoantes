var video = document.getElementById("video");
var btn = document.getElementById("btn-control");

function myFunction() {
  if (video.paused) {
    video.play();
    document.getElementById("btn-icon").classList.remove('fa-play');
    document.getElementById("btn-icon").classList.add('fa-pause');
  } else {
    video.pause();
    document.getElementById("btn-icon").classList.remove('fa-pause');
    document.getElementById("btn-icon").classList.add('fa-play');
  }
}
