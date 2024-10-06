function contarVogais(str) {
    let contador = 0;
    const vogais = 'aeiou';
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            contador++;
        }
    }

    return contador;
}