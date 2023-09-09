function password() {
  document.getElementById("pass").innerHTML="Myhomestay3212";
}

function hidepassword() {
  document.getElementById("pass").innerHTML="<br>";
}

// Auto Contop Hide JavaScript

setTimeout(() => {
  const box = document.getElementById('contop');
  box.style.display = 'none';
}, 8000);

setTimeout(() => {
  const box = document.getElementById('brcontop1');
  box.style.display = 'none';
}, 8000);

setTimeout(() => {
  const box = document.getElementById('brcontop2');
  box.style.display = 'none';
}, 8000);

function play() {
  var myVideo = document.getElementById("video-1")
  myVideo.play();
}

function pause() {
  var myVideo = document.getElementById("video-1")
  myVideo.pause();
}

function play1() {
  var myVideo = document.getElementById("video-2")
  myVideo.play();
}

function pause1() {
  var myVideo = document.getElementById("video-2")
  myVideo.pause();
}

function play2() {
  var myVideo = document.getElementById("video-3")
  myVideo.play();
}

function pause2() {
  var myVideo = document.getElementById("video-3")
  myVideo.pause();
}

function play3() {
  var myVideo = document.getElementById("video-4")
  myVideo.play();
}

function pause3() {
  var myVideo = document.getElementById("video-4")
  myVideo.pause();
}