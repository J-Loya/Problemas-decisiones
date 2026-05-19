function determinarDestino() {
  const presupuesto = parseFloat(document.getElementById('presupuesto').value);
  const costoPorKm = parseFloat(document.getElementById('costoPorKm').value);

  const errPresupuesto = document.getElementById('errPresupuesto');
  const errCostoPorKm = document.getElementById('errCostoPorKm');

  errPresupuesto.classList.remove('visible');
  errCostoPorKm.classList.remove('visible');

  let valido = true;

  if (isNaN(presupuesto) || presupuesto < 0) {
    errPresupuesto.classList.add('visible');
    valido = false;
  }

  if (isNaN(costoPorKm) || costoPorKm <= 0) {
    errCostoPorKm.classList.add('visible');
    valido = false;
  }

  if (!valido) return;

  // Destinos: nombre y distancia en km
  const destinos = [
    { nombre: 'México', km: 750 },
    { nombre: 'Puerto Vallarta', km: 800 },
    { nombre: 'Acapulco', km: 1200 },
    { nombre: 'Cancún', km: 1800 }
  ];

  // Calcular costo ida y vuelta para cada destino
  let destinoPosible = null;
  let costoDestino = 0;

  for (let i = destinos.length - 1; i >= 0; i--) {
    const costo = destinos[i].km * 2 * costoPorKm;
    if (costo <= presupuesto) {
      destinoPosible = destinos[i].nombre;
      costoDestino = costo;
      break;
    }
  }

  let resultado, costo;
  if (destinoPosible) {
    resultado = destinoPosible;
    costo = costoDestino.toFixed(2);
  } else {
    resultado = "Quedarse en casa";
    costo = "0.00";
  }

  document.getElementById('resDestino').textContent = resultado;
  document.getElementById('resCosto').textContent = '$' + costo;
  document.getElementById('resultBlock').classList.add('visible');
}
