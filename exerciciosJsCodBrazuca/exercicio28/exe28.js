function multiplicarElementos(lista) {
    let produto = 1;
    for (let i = 0; i < lista.length; i++) {
        produto *= lista[i];
    }
    return produto;
}