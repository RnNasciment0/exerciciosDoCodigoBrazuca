function reverterArray<T>(items: T[]): T[] {
    return items.reverse();
}

// Testando com arrays de tipos mistos
console.log(reverterArray([1, "a", true, 2, "b", false])); // [false, "b", 2, true, "a", 1]

// Aplicando métodos de filtro ou mapeamento antes de inverter o array
function filtrarNumerosEReverter(items: (number | string | boolean)[]): number[] {
    const numeros = items.filter(item => typeof item === "number") as number[];
    return reverterArray(numeros);
}

console.log(filtrarNumerosEReverter([1, "a", true, 2, "b", false, 3])); // [3, 2, 1]