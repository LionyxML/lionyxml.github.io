var modalApi = document.getElementsByClassName("modal-api")[0];
var btnApi = document.getElementById("btn-api");
var btnApiClose = document.getElementById("close-api");

btnApi.addEventListener("click", function () {
  modalApi.classList.toggle("modal-show");
});

btnApiClose.addEventListener("click", function () {
  modalApi.classList.remove("modal-show");
});

var modalLan = document.getElementsByClassName("modal-land")[0];
var btnLan = document.getElementById("btn-land");
var btnLanClose = document.getElementById("close-land");

btnLan.addEventListener("click", function () {
  modalLan.classList.toggle("modal-show");
});

btnLanClose.addEventListener("click", function () {
  modalLan.classList.remove("modal-show");
});

var modalQR = document.getElementsByClassName("modal-qr")[0];
var btnQR = document.getElementById("btn-r-qr");
var btnQRClose = document.getElementById("close-qr");

btnQR.addEventListener("click", function () {
  modalQR.classList.toggle("modal-show");
});

btnQRClose.addEventListener("click", function () {
  modalQR.classList.remove("modal-show");
});

var modalMic = document.getElementsByClassName("modal-micro")[0];
var btnMic = document.getElementById("btn-micro");
var btnMicClose = document.getElementById("close-micro");

btnMic.addEventListener("click", function () {
  modalMic.classList.toggle("modal-show");
});

btnMicClose.addEventListener("click", function () {
  modalMic.classList.remove("modal-show");
});

var modalDash = document.getElementsByClassName("modal-dash")[0];
var btnDash = document.getElementById("btn-dash");
var btnDashClose = document.getElementById("close-dash");

btnDash.addEventListener("click", function () {
  modalDash.classList.toggle("modal-show");
});

btnDashClose.addEventListener("click", function () {
  modalDash.classList.remove("modal-show");
});

var modalPort = document.getElementsByClassName("modal-landprof")[0];
var btnPort = document.getElementById("btn-landprof");
var btnPortClose = document.getElementById("close-landprof");

btnPort.addEventListener("click", function () {
  modalPort.classList.toggle("modal-show");
});

btnPortClose.addEventListener("click", function () {
  modalPort.classList.remove("modal-show");
});

var modalGame = document.getElementsByClassName("modal-game")[0];
var btnPort = document.getElementById("btn-game");
var btnPortClose = document.getElementById("close-game");

btnPort.addEventListener("click", function () {
  modalGame.classList.toggle("modal-show");
});

btnPortClose.addEventListener("click", function () {
  modalGame.classList.remove("modal-show");
});

var modalBlog = document.getElementsByClassName("modal-blog")[0];
var btnPort = document.getElementById("btn-blog");
var btnPortClose = document.getElementById("close-blog");

btnPort.addEventListener("click", function () {
  modalBlog.classList.toggle("modal-show");
});

btnPortClose.addEventListener("click", function () {
  modalBlog.classList.remove("modal-show");
});
