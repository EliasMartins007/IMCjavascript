window.addEventListener('load', start);

function start() {
  console.log('Pagina totalmente carregada');
  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);
}

// console.log('teste');

// function calcularImc(metros, centimetro, peso) {
//   //tentando colocar nessa função
//   var formulario = document.getElementById('formulario');
//   var alturaAoquadrado = metros + centimetro ** 2; //elevo ao quadrado a altura em colocao em uma variavel
//   var imc = alturaAoquadrado / peso;
//   //return (formulario.imc.value = imc.toFixed(2));
//   formulario.imc.value = imc.toFixed(2);
// }

//teste 06/10/2020 elias
calcularIMC = function () {
  //var formulario = document.getElementById('formulario');
  var formulario = document.querySelector('#formulario');
  var kilos = +formulario.quilos.value;
  var metros = +formulario.metros.value;
  var centimetros = +formulario.centimetros.value;

  var altura = (metros * 100 + centimetros) / 100;
  var imc = kilos / altura ** 2;
  formulario.imc.value = imc.toFixed(2);
};

function validar() {
  //implementar
}
function preventSubmit(event) {
  event.preventSubmit();

  //lblResultado
  var lblResultado = document.querySelector('#lblResultado');
  alert(lblResultado.value + ' calculo executado!!!');
}
