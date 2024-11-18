function saudacao(nome: string, idade?: number, cidade?: string, estado?: string): string {
    let mensagem = `Olá, ${nome}!`;
    if (idade !== undefined) {
        mensagem += ` Você tem ${idade} anos.`;
    }
    if (cidade !== undefined && estado !== undefined) {
        mensagem += ` Você mora em ${cidade}, ${estado}.`;
    } else if (cidade !== undefined) {
        mensagem += ` Você mora em ${cidade}.`;
    }
    return mensagem;
}

console.log(saudacao("Alice"));
console.log(saudacao("Bob", 30));
console.log(saudacao("Carol", 25, "São Paulo"));
console.log(saudacao("Dave", 40, "Rio de Janeiro", "RJ"));