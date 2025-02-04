/* Suma de elemntos en un arreglo: crea un arreglo de numeros y calcula la suma de todos sus elementos */

let arreglo = [5, 10, 3, 7, 2];
let suma = 0;

// Sumamos los elementos
for (let i = 0; i < arreglo.length; i++) {
  suma += arreglo[i];
}

// Mostramos la suma de elementos
console.log("Suma del arreglo:", suma);
