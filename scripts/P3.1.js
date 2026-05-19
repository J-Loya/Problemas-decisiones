/*
  EJERCICIO 3.1 - VERIFICACIÓN DE EDAD PARA VOTAR

  PSEUDOCÓDIGO:
  ─────────────────────────────────────────────
  ALGORITMO VerificarVoto
    ENTRADA: edad (número)
    
    SI edad es válida (> 0) ENTONCES
      SI edad >= 18 ENTONCES
        SALIDA: "Sí puede votar"
      SINO
        SALIDA: "No puede votar"
      FIN SI
    SINO
      SALIDA: "Edad inválida"
    FIN SI
  FIN ALGORITMO

  DIAGRAMA DE FLUJO:
  ─────────────────────────────────────────────
  INICIO
    ↓
  [Leer edad]
    ↓
  ¿Edad válida (>0)?
    ├─ NO → [Mostrar error] → FIN
    ├─ SÍ ↓
  ¿Edad >= 18?
    ├─ SÍ → [Mostrar "Sí puede votar"]
    └─ NO → [Mostrar "No puede votar"]
    ↓
  FIN

  DIAGRAMA N/S (Nassi-Schneiderman):
  ─────────────────────────────────────────────
  ┌─ Leer edad ─────────────────────────┐
  │                                     │
  │ ¿Edad válida (> 0)?                 │
  │ ┌──────────┴──────────┐             │
  │ │ SÍ                  │ NO          │
  │ │ ┌─────────────────┐ │ ┌────────┐  │
  │ │ │ ¿Edad >= 18?    │ │ │ Error  │  │
  │ │ │ ┌──────┴──────┐ │ │ └────────┘  │
  │ │ │ │SÍ      │NO  │ │ │            │
  │ │ │ │Sí vota │No  │ │ │            │
  │ │ │ │        │vota│ │ │            │
  │ │ │ └────────┴────┘ │ │            │
  │ │ └─────────────────┘ │            │
  │ └────────────────────────────────────┘
  │                                     │
  └─────── Mostrar resultado ──────────┘
*/

function verificarVoto() {
  const edad = parseFloat(document.getElementById('edad').value);
  const errEdad = document.getElementById('errEdad');
  
  errEdad.classList.remove('visible');
  
  if (isNaN(edad) || edad <= 0) {
    errEdad.classList.add('visible');
    return;
  }
  
  let resultado;
  if (edad >= 18) {
    resultado = "Sí puede votar";
  } else {
    resultado = "No puede votar";
  }
  
  document.getElementById('resVoto').textContent = resultado;
  document.getElementById('resultBlock').classList.add('visible');
}
