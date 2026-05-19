function calcularCosto() {
  const alumnos = parseFloat(document.getElementById('alumnos').value);
  const errAlumnos = document.getElementById('errAlumnos');

  errAlumnos.classList.remove('visible');

  if (isNaN(alumnos) || alumnos <= 0) {
    errAlumnos.classList.add('visible');
    return;
  }

  let tarifa;
  if (alumnos > 100) {
    tarifa = 20;
  } else if (alumnos >= 50) {
    tarifa = 35;
  } else if (alumnos >= 20) {
    tarifa = 40;
  } else {
    tarifa = 70;
  }

  const costoTotal = alumnos * tarifa;

  document.getElementById('resAlumnos').textContent = alumnos;
  document.getElementById('resTarifa').textContent = '$' + tarifa.toFixed(2);
  document.getElementById('resCostoTotal').textContent = '$' + costoTotal.toFixed(2);
  document.getElementById('resultBlock').classList.add('visible');
}
