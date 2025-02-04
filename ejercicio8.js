/* Busqueda de elementos en un arreglo: Crea un arreglo de nombres y dada una cadena con un nombre, verifica
si ese nombre esta presente en el arreglo y muestra un mensaje apropiado  */

const nombres = ["Ana", "Luis", "Carlos", "María", "Pedro"];

// Verificar si un nombre está en el arreglo
function buscarNombre(nombre) {
  if (nombres.includes(nombre)) {
    console.log(`El nombre ${nombre} está presente en el arreglo.`);
  } else {
    console.log(`El nombre ${nombre} no está presente en el arreglo.`);
  }
}

// Ejemplo de uso
const nombreABuscar = "Carlos"; // Cambia este valor por el nombre que desees buscar
buscarNombre(nombreABuscar);
