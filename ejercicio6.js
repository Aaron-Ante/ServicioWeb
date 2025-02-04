/* Filtrado de elementos en un arreglo: crea un arreglo de numeros y filtra los elementos para mostrar 
solo aquellos que sean mayores que un valor dado por el usuario */

const arreglo = [5, 10, 3, 7, 2];
const valorFiltro = 5; // Valor del filtro 

// Filtramos los elementos mayores que el valor dado
const arregloFiltrado = arreglo.filter(function(elemento) {
  return elemento > valorFiltro;
});

// .filtrer =  filtrar un rango de datos en función de los criterios que defina

console.log("Elementos mayores que " + valorFiltro + ":", arregloFiltrado);
