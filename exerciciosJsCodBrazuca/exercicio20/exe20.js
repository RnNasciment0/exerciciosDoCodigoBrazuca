function somaDosDigitos(numero) {
    let soma = 0;
    const strNumero = numero.toString();

    for (let i = 0; i < strNumero.length; i++) {
        soma += parseInt(strNumero[i], 10);
    }

    return soma;
}