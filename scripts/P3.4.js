function calcularTarifa() {
  const horas = parseFloat(document.getElementById('horas').value);
  const errHoras = document.getElementById('errHoras');

  errHoras.classList.remove('visible');

  if (isNaN(horas) || horas <= 0) {
    errHoras.classList.add('visible');
    return;
  }

  let costo;
  if (horas <= 2) {
    costo = horas * 5;
  } else if (horas <= 5) {
    costo = (2 * 5) + (horas - 2) * 4;
  } else if (horas <= 10) {
    costo = (2 * 5) + (3 * 4) + (horas - 5) * 3;
  } else {
    costo = (2 * 5) + (3 * 4) + (5 * 3) + (horas - 10) * 2;
  }

  document.getElementById('resTarifa').textContent = '$' + costo.toFixed(2);
  document.getElementById('resultBlock').classList.add('visible');
}
