/* Reversion de cadena: dada una frase y luego muestra la misma frase pero con las palabras en orden inverso */

const frase = "Ejemplo Frase Invertida";

const fraseInvertida = frase.split(" ").reverse().join(" ");
/*
.split(" ") = divide 
.reverse() = invierte
.join() = unir 
*/

// Mostramos la frase invertida
console.log(fraseInvertida);
