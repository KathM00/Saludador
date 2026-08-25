export default function saludar(nombre, hora, genero, edad, idioma) {
  const esManana = hora >= 5 && hora < 12;
  const esTarde = hora >= 12 && hora < 19;
  
  const diccionarios = {
    es: {
      saludo: (esManana && "Buenos días") || (esTarde && "Buenas tardes") || "Buenas noches",
      M: "Sr. ",
      F: "Sra. "
    },
    en: {
      saludo: (esManana && "Good morning") || (esTarde && "Good afternoon") || "Good evening",
      M: "Mr. ",
      F: "Mrs. "
    }
  };
  
  const base = diccionarios[idioma].saludo;
  const esMayor = edad > 30;
  const titulo = (esMayor && diccionarios[idioma][genero]) || "";
  
  return base + ", " + titulo + nombre;
}