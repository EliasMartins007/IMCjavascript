window.addEventListener('load', start);

function start() {
  console.log('Pagina totalmente carregada');
  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);
  document.querySelector('.txtQuilos').focus();
}

function calcularImc() {
  //tentando colocar nessa função
  var FQuilos = Number(document.querySelector('.txtQuilos').value);
  var Quilos = FQuilos;
  var Fmetros = Number(document.querySelector('.txtMetros').value);
  var metros = Fmetros;
  var Fcentimetros = Number(document.querySelector('.txtCentimetros').value);
  var centimetros = Fcentimetros;
  var alturaAoquadrado = (metros * 100 + centimetros) / 100;
  var imc = Quilos / alturaAoquadrado ** 2;
  document.querySelector('.lblResultado').value = imc.toFixed(1);
}

function preventSubmit(event) {
  event.preventSubmit();
  event.preventDefault();
}

function validar() {
  var Quilos = document.querySelector('.txtQuilos');
  var metros = document.querySelector('.txtMetros');
  var centimetros = document.querySelector('.txtCentimetros');

  if (Quilos.value === '') {
    alert('Preencha o campo Quilos por favor!');
  } else {
    if (metros.value === '') {
      alert('Preencha o campo Metros por favor!');
    } else {
      if (centimetros.value === '') {
        alert('Preencha o campo Centimetros por favor!');
      } else {
        calcularImc();
      }
    }
  }
}
