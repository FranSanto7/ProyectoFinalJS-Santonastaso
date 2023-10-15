function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Error: No se puede dividir por cero.";
  }
}

const resultados = {
  suma: 0,
  resta: 0,
  multiplicacion: 0,
  division: 0,
};

document.addEventListener("DOMContentLoaded", function () {
  const mensajeBienvenida = document.createElement("p");
  mensajeBienvenida.textContent = "¡Bienvenido a la calculadora!";
  document.body.appendChild(mensajeBienvenida);

  const numero1 = parseFloat(prompt("Ingrese el primer número:"));
  const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

  resultados.suma = sumar(numero1, numero2);
  resultados.resta = restar(numero1, numero2);
  resultados.multiplicacion = multiplicar(numero1, numero2);
  resultados.division = dividir(numero1, numero2);

  localStorage.setItem("resultados", JSON.stringify(resultados));

  const mostrarResultadosBtn = document.createElement("button");
  mostrarResultadosBtn.textContent = "Mostrar Resultados";
  document.body.appendChild(mostrarResultadosBtn);

  mostrarResultadosBtn.addEventListener("click", function () {
    const resultadosAlmacenados = JSON.parse(localStorage.getItem("resultados"));

    const resultadoDiv = document.createElement("div");
    resultadoDiv.innerHTML = `
      <p>Suma: ${resultadosAlmacenados.suma}</p>
      <p>Resta: ${resultadosAlmacenados.resta}</p>
      <p>Multiplicación: ${resultadosAlmacenados.multiplicacion}</p>
      <p>División: ${resultadosAlmacenados.division}</p>
    `;
    document.body.appendChild(resultadoDiv);
  });
});


fetch("datos.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error al cargar datos: " + error);
  });
