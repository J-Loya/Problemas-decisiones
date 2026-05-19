function encontrarMenor() {
  const nombre1 = document.getElementById('nombre1').value.trim();
  const edad1 = parseFloat(document.getElementById('edad1').value);
  const nombre2 = document.getElementById('nombre2').value.trim();
  const edad2 = parseFloat(document.getElementById('edad2').value);
  const nombre3 = document.getElementById('nombre3').value.trim();
  const edad3 = parseFloat(document.getElementById('edad3').value);

  const errNombre1 = document.getElementById('errNombre1');
  const errEdad1 = document.getElementById('errEdad1');
  const errNombre2 = document.getElementById('errNombre2');
  const errEdad2 = document.getElementById('errEdad2');
  const errNombre3 = document.getElementById('errNombre3');
  const errEdad3 = document.getElementById('errEdad3');

  errNombre1.classList.remove('visible');
  errEdad1.classList.remove('visible');
  errNombre2.classList.remove('visible');
  errEdad2.classList.remove('visible');
  errNombre3.classList.remove('visible');
  errEdad3.classList.remove('visible');

  let valido = true;

  if (nombre1 === '') {
    errNombre1.classList.add('visible');
    valido = false;
  }

  if (isNaN(edad1) || edad1 <= 0) {
    errEdad1.classList.add('visible');
    valido = false;
  }

  if (nombre2 === '') {
    errNombre2.classList.add('visible');
    valido = false;
  }

  if (isNaN(edad2) || edad2 <= 0) {
    errEdad2.classList.add('visible');
    valido = false;
  }

  if (nombre3 === '') {
    errNombre3.classList.add('visible');
    valido = false;
  }

  if (isNaN(edad3) || edad3 <= 0) {
    errEdad3.classList.add('visible');
    valido = false;
  }

  if (!valido) return;

  let nombreMenor, edadMenor;

  if (edad1 <= edad2 && edad1 <= edad3) {
    nombreMenor = nombre1;
    edadMenor = edad1;
  } else if (edad2 <= edad1 && edad2 <= edad3) {
    nombreMenor = nombre2;
    edadMenor = edad2;
  } else {
    nombreMenor = nombre3;
    edadMenor = edad3;
  }

  document.getElementById('resPersona').textContent = nombreMenor + ' (' + edadMenor + ' años)';
  document.getElementById('resultBlock').classList.add('visible');
}
