function calcularPoliza() {
  const poliza = document.getElementById('poliza').value;
  const edad = parseFloat(document.getElementById('edad').value);
  const bebe = document.getElementById('alcohol').value === 'si';
  const lentes = document.getElementById('lentes').value === 'si';
  const enfermedad = document.getElementById('enfermedad').value === 'si';

  const errEdad = document.getElementById('errEdad');
  errEdad.classList.remove('visible');

  if (isNaN(edad) || edad <= 0) {
    errEdad.classList.add('visible');
    return;
  }

  // Cuota base
  const cuotaBase = poliza === 'A' ? 1200 : 950;

  // Calcular cargos
  let totalCargos = 0;

  if (bebe) {
    totalCargos += cuotaBase * 0.10;
  }

  if (lentes) {
    totalCargos += cuotaBase * 0.05;
  }

  if (enfermedad) {
    totalCargos += cuotaBase * 0.05;
  }

  if (edad > 40) {
    totalCargos += cuotaBase * 0.20;
  } else {
    totalCargos += cuotaBase * 0.10;
  }

  const total = cuotaBase + totalCargos;

  document.getElementById('resBase').textContent = '$' + cuotaBase.toFixed(2);
  document.getElementById('resCargos').textContent = '$' + totalCargos.toFixed(2);
  document.getElementById('resTotal').textContent = '$' + total.toFixed(2);
  document.getElementById('resultBlock').classList.add('visible');
}
