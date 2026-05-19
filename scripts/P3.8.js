function calcularBono() {
  const antiguedad = parseFloat(document.getElementById('antiguedad').value);
  const sueldo = parseFloat(document.getElementById('sueldo').value);

  const errAntiguedad = document.getElementById('errAntiguedad');
  const errSueldo = document.getElementById('errSueldo');

  errAntiguedad.classList.remove('visible');
  errSueldo.classList.remove('visible');

  let valido = true;

  if (isNaN(antiguedad) || antiguedad < 0) {
    errAntiguedad.classList.add('visible');
    valido = false;
  }

  if (isNaN(sueldo) || sueldo <= 0) {
    errSueldo.classList.add('visible');
    valido = false;
  }

  if (!valido) return;

  // Calcular bono por antigüedad
  let bonoAntiguedad;
  if (antiguedad > 2 && antiguedad < 5) {
    bonoAntiguedad = sueldo * 0.20;
  } else if (antiguedad >= 5) {
    bonoAntiguedad = sueldo * 0.30;
  } else {
    bonoAntiguedad = 0;
  }

  // Calcular bono por sueldo
  let bonoSueldo;
  if (sueldo < 1000) {
    bonoSueldo = sueldo * 0.25;
  } else if (sueldo <= 3500) {
    bonoSueldo = sueldo * 0.15;
  } else {
    bonoSueldo = sueldo * 0.10;
  }

  // Asignar el bono mayor
  const bonoMayor = Math.max(bonoAntiguedad, bonoSueldo);

  document.getElementById('resBonoAntiguedad').textContent = '$' + bonoAntiguedad.toFixed(2);
  document.getElementById('resBonoSueldo').textContent = '$' + bonoSueldo.toFixed(2);
  document.getElementById('resBonoMayor').textContent = '$' + bonoMayor.toFixed(2);
  document.getElementById('resultBlock').classList.add('visible');
}
