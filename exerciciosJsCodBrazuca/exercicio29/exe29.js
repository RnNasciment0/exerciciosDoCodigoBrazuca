function estaEmOrdemCrescente(lista) {
    for (let i = 0; i < lista.length - 1; i++) {
        if (lista[i] > lista[i + 1]) {
            return false;
        }
    }
    return true;
}