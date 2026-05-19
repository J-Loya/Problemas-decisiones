/*
  EJERCICIO 3.2 - CÁLCULO DE SUELDO SEMANAL CON HORAS EXTRAS

  PSEUDOCÓDIGO:
  ─────────────────────────────────────────────
  ALGORITMO CalcularSueldo
    ENTRADA: horas (número), pagoHora (número)
    
    SI horas válidas (>= 0) Y pagoHora válido (> 0) ENTONCES
      SI horas <= 40 ENTONCES
        sueldo = horas * pagoHora
      SINO
        horasNormales = 40
        horasExtras = horas - 40
        sueldo = (horasNormales * pagoHora) + (horasExtras * pagoHora * 2)
      FIN SI
      SALIDA: sueldo
    SINO
      SALIDA: "Datos inválidos"
    FIN SI
  FIN ALGORITMO

  DIAGRAMA DE FLUJO:
  ─────────────────────────────────────────────
  INICIO
    ↓
  [Leer horas, pagoHora]
    ↓
  ¿Datos válidos?
    ├─ NO → [Mostrar error] → FIN
    ├─ SÍ ↓
  ¿Horas <= 40?
    ├─ SÍ → [sueldo = horas * pagoHora]
    └─ NO → [horasExtras = horas - 40]
            [sueldo = 40*pagoHora + horasExtras*pagoHora*2]
    ↓
  [Mostrar sueldo]
    ↓
  FIN

  DIAGRAMA N/S (Nassi-Schneiderman):
  ─────────────────────────────────────────────
  ┌─ Leer horas, pagoHora ───────────────┐
  │                                       │
  │ ¿Datos válidos?                       │
  │ ┌──────────┴──────────┐               │
  │ │ SÍ                  │ NO            │
  │ │ ┌─────────────────┐ │ ┌──────────┐  │
  │ │ │ ¿Horas <= 40?   │ │ │ Error    │  │
  │ │ │ ┌──────┴──────┐ │ │ └──────────┘  │
  │ │ │ │SÍ           │ NO                │
  │ │ │ │ sueldo =    │ horasExtras =    │
  │ │ │ │ horas *     │ horas - 40       │
  │ │ │ │ pagoHora    │ sueldo =         │
  │ │ │ │             │ 40*pagoHora +    │
  │ │ │ │             │ horasExtras*     │
  │ │ │ │             │ pagoHora*2       │
  │ │ │ └─────┬───────┘                  │
  │ │ └───────┴───────────────────────────┘
  │ │                                     │
  └─┴───────── Mostrar sueldo ──────────┘
*/

function calcularSueldo() {
  const horas = parseFloat(document.getElementById('horas').value);
  const pago = parseFloat(document.getElementById('pago').value);

  const errHoras = document.getElementById('errHoras');
  const errPago = document.getElementById('errPago');

  errHoras.classList.remove('visible');
  errPago.classList.remove('visible');

  let valido = true;

  if (isNaN(horas) || horas < 0) {
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
  } else {
    const horasExtras = horas - 40;
    sueldo = (40 * pago) + (horasExtras * pago * 2);
  }

  document.getElementById('resSueldo').textContent = '$' + sueldo.toFixed(2);
  document.getElementById('resultBlock').classList.add('visible');
}
