function filtrarPrecosAltos(precos: number[], valorCorte: number = 100): number[] {
    return precos.filter(preco => preco > valorCorte).map(preco => preco * 1.1); // Aumenta os preços selecionados em 10%
}

console.log(filtrarPrecosAltos([50, 150, 200, 30])); // [165, 220]
console.log(filtrarPrecosAltos([50, 150, 200, 30], 50)); // [165, 220, 33]
console.log(filtrarPrecosAltos([50, 150, 200, 30], 200)); // []