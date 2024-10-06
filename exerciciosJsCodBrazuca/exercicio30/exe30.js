function contarNumerosImpares(lista) {
    let contador = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 !== 0) {
            contador++;
        }
    }
    return contador;
}