function calcularSueldo() {
  const horas = parseFloat(document.getElementById('horas').value);
  const pago = parseFloat(document.getElementById('pago').value);

  const errHoras = document.getElementById('errHoras');
  const errPago = document.getElementById('errPago');

  errHoras.classList.remove('visible');
  errPago.classList.remove('visible');

  let valido = true;

  if (isNaN(horas) || horas <= 0 || horas > 50) {
    errHoras.classList.add('visible');
    valido = false;
  }

  if (isNaN(pago) || pago <= 0) {
    errPago.classList.add('visible');
    valido = false;
  }

  if (!valido) return;

  let sueldo;
  if (horas <= 40) {
    sueldo = horas * pago;
  } else if (horas <= 45) {
    sueldo = (40 * pago) + ((horas - 40) * pago * 2);
  } else {
    sueldo = (40 * pago) + (5 * pago * 2) + ((horas - 45) * pago * 3);
  }

  document.getElementById('resSueldo').textContent = '$' + sueldo.toFixed(2);
  document.getElementById('resultBlock').classList.add('visible');
}
