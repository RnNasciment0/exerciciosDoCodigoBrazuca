function calcularMedia(numeros: number[]): number {
    const total = numeros.reduce((acc, numero) => acc + numero, 0);
    return total / numeros.length;
}

console.log(calcularMedia([10, 20, 30, 40])); // 25
console.log(calcularMedia([10.5, 20.3, -5, 40.2])); // 16.5
console.log(calcularMedia([-10, -20, -30, -40])); // -25
console.log(calcularMedia([1.5, 2.5, 3.5, 4.5])); // 3