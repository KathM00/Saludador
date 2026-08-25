import saludar from "./saludador.js";

const nombreInput = document.querySelector("#nombre-input");
const edadInput = document.querySelector("#edad-input");
const generoSelect = document.querySelector("#genero-select");
const idiomaSelect = document.querySelector("#idioma-select");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const nombre = nombreInput.value;
  const edad = Number.parseInt(edadInput.value);
  const genero = generoSelect.value;
  const idioma = idiomaSelect.value;
  
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();

  const nombreSinNumeros = !/\d/.test(nombre);
  const edadValida = !isNaN(edad) && edad >= 0;
  const esValido = nombreSinNumeros && edadValida;

  const mensajeError = "Error: Ingrese un nombre y una edad con valores válidos.";

  const mensaje = (esValido && saludar(nombre, horaActual, genero, edad, idioma)) || mensajeError;
  div.innerHTML = "<p>" + mensaje + "</p>";
});