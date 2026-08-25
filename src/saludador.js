export default function saludar(nombre, hora, genero) {
  const esManana = hora >= 5 && hora < 12;
  const esTarde = hora >= 12 && hora < 19;
  const base = (esManana && "Buenos días") || (esTarde && "Buenas tardes") || "Buenas noches";
  
  const titulos = { M: "Sr. ", F: "Sra. " };
  const titulo = titulos[genero] || "";
  
  return base + ", " + titulo + nombre;
}