enum DiasSemana {
    Segunda = "Segunda-feira",
    Terca = "Terça-feira",
    Quarta = "Quarta-feira",
    Quinta = "Quinta-feira",
    Sexta = "Sexta-feira",
    Sabado = "Sábado",
    Domingo = "Domingo",
    Natal = "Natal",
    AnoNovo = "Ano Novo"
}

function ehFimDeSemanaOuFeriado(dia: DiasSemana): boolean {
    return dia === DiasSemana.Sabado || dia === DiasSemana.Domingo || dia === DiasSemana.Natal || dia === DiasSemana.AnoNovo;
}

console.log(ehFimDeSemanaOuFeriado(DiasSemana.Domingo)); // true
console.log(ehFimDeSemanaOuFeriado(DiasSemana.Quinta)); // false
console.log(ehFimDeSemanaOuFeriado(DiasSemana.Natal)); // true
console.log(ehFimDeSemanaOuFeriado(DiasSemana.AnoNovo)); // true