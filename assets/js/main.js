var modalApi = document.getElementsByClassName('modal-api')[0];
var btnApi = document.getElementById('btn-api');
var btnClose = document.getElementsByClassName('modal-fechar')[0];

btnClose.addEventListener('click', function () {
  modalApi.classList.toggle('modal-mostrar');
});

btnApi.addEventListener('click', function () {
  modalApi.classList.toggle('modal-mostrar');
});
