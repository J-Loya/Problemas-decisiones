function calcularBeca() {
  const edad = parseFloat(document.getElementById('edad').value);
  const promedio = parseFloat(document.getElementById('promedio').value);

  const errEdad = document.getElementById('errEdad');
  const errPromedio = document.getElementById('errPromedio');

  errEdad.classList.remove('visible');
  errPromedio.classList.remove('visible');

  let valido = true;

  if (isNaN(edad) || edad <= 0) {
    errEdad.classList.add('visible');
    valido = false;
  }

  if (isNaN(promedio) || promedio < 0 || promedio > 10) {
    errPromedio.classList.add('visible');
    valido = false;
  }

  if (!valido) return;

  let resultado;

  if (edad > 18) {
    if (promedio >= 9) {
      resultado = "Beca de $2000.00";
    } else if (promedio >= 7.5) {
      resultado = "Beca de $1000.00";
    } else if (promedio >= 6.0) {
      resultado = "Beca de $500.00";
    } else {
      resultado = "Carta de invitación a estudiar más";
    }
  } else {
    if (promedio >= 9) {
      resultado = "Beca de $3000.00";
    } else if (promedio >= 8) {
      resultado = "Beca de $2000.00";
    } else if (promedio >= 6) {
      resultado = "Beca de $100.00";
    } else {
      resultado = "Carta de invitación a estudiar más";
    }
  }

  document.getElementById('resBeca').textContent = resultado;
  document.getElementById('resultBlock').classList.add('visible');
}
