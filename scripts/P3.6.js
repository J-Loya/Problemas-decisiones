function calcularDescuento() {
  const precio = parseFloat(document.getElementById('precio').value);
  const errPrecio = document.getElementById('errPrecio');

  errPrecio.classList.remove('visible');

  if (isNaN(precio) || precio <= 0) {
    errPrecio.classList.add('visible');
    return;
  }

  let porcentaje;
  if (precio >= 200) {
    porcentaje = 15;
  } else if (precio > 100) {
    porcentaje = 12;
  } else {
    porcentaje = 10;
  }

  const descuento = precio * (porcentaje / 100);
  const precioFinal = precio - descuento;

  document.getElementById('resDescuento').textContent = '$' + descuento.toFixed(2) + ' (' + porcentaje + '%)';
  document.getElementById('resFinal').textContent = '$' + precioFinal.toFixed(2);
  document.getElementById('resultBlock').classList.add('visible');
}
