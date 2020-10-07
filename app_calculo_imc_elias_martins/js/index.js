window.addEventListener('load', start);

function start() {
  console.log('Pagina totalmente carregada');
  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);
}

function calcularImcTest() {
  //tentando colocar nessa função
  var FKilos = Number(document.querySelector('.txtQuilos').value);
  var kilos = FKilos;
  var Fmetros = Number(document.querySelector('.txtMetros').value);
  var metros = Fmetros;
  var Fcentimetros = Number(document.querySelector('.txtCentimetros').value);
  var centimetros = Fcentimetros;
  var alturaAoquadrado = (metros * 100 + centimetros) / 100;
  var imc = kilos / alturaAoquadrado ** 2;
  document.querySelector('.lblResultado').value = imc.toFixed(1);
}

function preventSubmit(event) {
  event.preventSubmit();
  event.preventDefault();
}

function validar() {
  //var kilos = form.quilos;
  var kilos = document.querySelector('quilos');
  //var metros = form.metros;
  var metros = document.querySelector('metros');
  //var centimetros = form.centimetros;
  var centimetros = document.querySelector('centimetros');

  if (kilos.value == '') {
    alert('Preencha o campo quilos por favor!');
    // form.quilos.focus();
    return;
  }

  calcularImcTest();
}
