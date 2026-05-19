function determinarRegalo() {
  const presupuesto = parseFloat(document.getElementById('presupuesto').value);
  const errPresupuesto = document.getElementById('errPresupuesto');

  errPresupuesto.classList.remove('visible');

  if (isNaN(presupuesto) || presupuesto < 0) {
    errPresupuesto.classList.add('visible');
    return;
  }

  let regalo;
  if (presupuesto <= 10) {
    regalo = "Tarjeta";
  } else if (presupuesto <= 100) {
    regalo = "Chocolates";
  } else if (presupuesto <= 250) {
    regalo = "Flores";
  } else {
    regalo = "Anillo";
  }

  document.getElementById('resRegalo').textContent = regalo;
  document.getElementById('resultBlock').classList.add('visible');
}
