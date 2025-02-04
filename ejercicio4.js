/* Ordenamiento de un arreglo: Crea un arreglo de numeros desordenados y luego ordenalo de menor a mayor
utilizando algun algoritmo de ordenamiento  */

function Burbuja() {
    const lista = [200, 700, 350, 100, 90, 40, 20];
    var n, i, k, aux;
    n = lista.length;
    console.log(`Lista Desordenada \n` + "["+ lista + "]"); // Mostramos lista desordenada
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }

    console.log(`Lista Ordenada \n`+"["+ lista + "]"); // Mostramos lista ya ordenada
}

return Burbuja();