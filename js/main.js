// var video = document.getElementById("video");
//
// function myFunction() {
//   if (video.paused) {
//     video.play();
//     document.getElementById("btn-icon").classList.remove('fa-play');
//     document.getElementById("btn-icon").classList.add('fa-pause');
//   } else {
//     video.pause();
//     document.getElementById("btn-icon").classList.remove('fa-pause');
//     document.getElementById("btn-icon").classList.add('fa-play');
//   }
// }

// Menu

// Get Modal
var modal = document.getElementById('modalMenu');

// Get pseudoelement to open Modal
var btnMenu = document.getElementById("menu");

// Get the <span> element to close Modal
var back = document.getElementById("volver");

// When user clicks button, open Modal
btnMenu.onclick = function() {
  modal.classList.remove('fadeOutRight');
  modal.style.display = "block";
  modal.classList.add('fadeInRight');
};

// When user clicks Close (x), close Modal
back.onclick = function() {
  modal.classList.remove('fadeInRight');
  modal.classList.add('fadeOutRight');
  //modal.style.display = "none";
};

// When user clicks anywhere outside of the Modal, close Modal
 window.onclick = function(event) {
    if (event.target == modal) {
       modal.style.display = "none";
       }
    }


// Pelicula
function showInfo(id) {
  info = document.getElementById(id);
  info.classList.remove('fadeOutRight');
  info.classList.add('fadeInRight');
  info.style.display = "block";
}

function hideInfo(id) {
  info = document.getElementById(id);
  info.style.display = "none";
}
