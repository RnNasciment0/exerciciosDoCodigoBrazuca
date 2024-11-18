function buscarDados(tempo: number): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Dados carregados em ${tempo}ms`), tempo);
    });
}

async function exibirDados() {
    const dados1 = await buscarDados(2000);
    console.log(dados1);

    const dados2 = await buscarDados(1000);
    console.log(dados2);

    const dados3 = await buscarDados(3000);
    console.log(dados3);
}

exibirDados();