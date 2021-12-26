var modalApi = document.getElementsByClassName("modal-api")[0];
var btnApi = document.getElementById("btn-api");
var btnApiClose = document.getElementById("fechar-api");

btnApi.addEventListener("click", function () {
  modalApi.classList.toggle("modal-mostrar");
});

btnApiClose.addEventListener("click", function () {
  modalApi.classList.remove("modal-mostrar");
});

var modalLan = document.getElementsByClassName("modal-land")[0];
var btnLan = document.getElementById("btn-land");
var btnLanClose = document.getElementById("fechar-land");

btnLan.addEventListener("click", function () {
  modalLan.classList.toggle("modal-mostrar");
});

btnLanClose.addEventListener("click", function () {
  modalLan.classList.remove("modal-mostrar");
});

var modalQR = document.getElementsByClassName("modal-qr")[0];
var btnQR = document.getElementById("btn-r-qr");
var btnQRClose = document.getElementById("fechar-qr");

btnQR.addEventListener("click", function () {
  modalQR.classList.toggle("modal-mostrar");
});

btnQRClose.addEventListener("click", function () {
  modalQR.classList.remove("modal-mostrar");
});

var modalMic = document.getElementsByClassName("modal-micro")[0];
var btnMic = document.getElementById("btn-micro");
var btnMicClose = document.getElementById("fechar-micro");

btnMic.addEventListener("click", function () {
  modalMic.classList.toggle("modal-mostrar");
});

btnMicClose.addEventListener("click", function () {
  modalMic.classList.remove("modal-mostrar");
});

var modalDash = document.getElementsByClassName("modal-dash")[0];
var btnDash = document.getElementById("btn-dash");
var btnDashClose = document.getElementById("fechar-dash");

btnDash.addEventListener("click", function () {
  modalDash.classList.toggle("modal-mostrar");
});

btnDashClose.addEventListener("click", function () {
  modalDash.classList.remove("modal-mostrar");
});

var modalPort = document.getElementsByClassName("modal-landprof")[0];
var btnPort = document.getElementById("btn-landprof");
var btnPortClose = document.getElementById("fechar-landprof");

btnPort.addEventListener("click", function () {
  modalPort.classList.toggle("modal-mostrar");
});

btnPortClose.addEventListener("click", function () {
  modalPort.classList.remove("modal-mostrar");
});
