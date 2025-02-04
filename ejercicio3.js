/* Palindromo: dada una palabra y verific si es un palindromo (es decir, si se lee igual de adelante hacia 
    atras que de atras hacia adelante)  */

    function palindromo(palabra) {
        if (palabra === palabra.split('').reverse().join('')) {
          console.log(palabra + " es un palíndromo.");
        } else {
          console.log(palabra + " no es un palíndromo.");
        }
      }
      
      // Mostramos 
      palindromo("ANA"); // Es un palíndromo
      palindromo("HOLA"); // No es un palíndromo
      