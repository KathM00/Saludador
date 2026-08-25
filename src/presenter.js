import saludar from "./saludador.js";

const nombreInput = document.querySelector("#nombre-input");
const edadInput = document.querySelector("#edad-input");
const generoSelect = document.querySelector("#genero-select");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = nombreInput.value;
  const edad = Number.parseInt(edadInput.value);
  const genero = generoSelect.value;
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  
  const mensaje = saludar(nombre, horaActual, genero, edad);
  div.innerHTML = "<p>" + mensaje + "</p>";
});