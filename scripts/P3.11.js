function calcularBono() {
  const antiguedad = parseFloat(document.getElementById('antiguedad').value);
  const errAntiguedad = document.getElementById('errAntiguedad');

  errAntiguedad.classList.remove('visible');

  if (isNaN(antiguedad) || antiguedad <= 0) {
    errAntiguedad.classList.add('visible');
    return;
  }

  let bono;
  if (antiguedad > 5) {
    bono = 1000;
  } else if (antiguedad === 5) {
    bono = 500;
  } else if (antiguedad === 4) {
    bono = 400;
  } else if (antiguedad === 3) {
    bono = 300;
  } else if (antiguedad === 2) {
    bono = 200;
  } else {
    bono = 100;
  }

  document.getElementById('resBono').textContent = '$' + bono.toFixed(2);
  document.getElementById('resultBlock').classList.add('visible');
}
