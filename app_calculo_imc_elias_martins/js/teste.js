//teste 06/10/2020 elias
calcularIMC = function () {
  var formulario = document.getElementById('formulario');

  var kilos = +formulario.quilos.value;
  var metros = +formulario.metros.value;
  var centimetros = +formulario.centimetros.value;

  var altura = (metros * 100 + centimetros) / 100;
  var imc = kilos / altura ** 2;
  formulario.imc.value = imc.toFixed(2);
};
