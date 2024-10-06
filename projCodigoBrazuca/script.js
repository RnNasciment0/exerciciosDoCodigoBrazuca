let contadorTransacoes = 0;
let historicoTransacoes = [];

document.getElementById('calcular').addEventListener('click', function() {
    let valorTransacao = parseFloat(document.getElementById('valor-transacao').value);
    let complexidade = document.getElementById('complexidade').value;
    let moeda = document.getElementById('moeda').value;
    let precoGas;

    if (isNaN(valorTransacao) || valorTransacao <= 0) {
        document.getElementById('resultado').innerHTML = '<p style="color:red;">Por favor, insira um valor de transação válido.</p>';
        return;
    }

    switch (complexidade) {
        case 'baixa':
            precoGas = 0.01;
            break;
        case 'media':
            precoGas = 0.05;
            break;
        case 'alta':
            precoGas = 0.1;
            break;
    }

    let custoGas = valorTransacao * precoGas;
    let custoGasConvertido = custoGas;

    if (moeda === 'USD') {
        custoGasConvertido = custoGas * 30; // Exemplo de taxa de conversão
    } else if (moeda === 'EUR') {
        custoGasConvertido = custoGas * 25; // Exemplo de taxa de conversão
    }

    document.getElementById('resultado').innerHTML = `
        <p>Valor da Transação: ${valorTransacao} DOT</p>
        <p>Complexidade: ${complexidade.charAt(0).toUpperCase() + complexidade.slice(1)}</p>
        <p><strong>Custo Estimado do Gas: ${custoGas.toFixed(2)} DOT</strong></p>
        <p><strong>Custo Estimado do Gas em ${moeda}: ${custoGasConvertido.toFixed(2)} ${moeda}</strong></p>
    `;

    contadorTransacoes++;
    document.getElementById('contador').innerText = `Transações Simuladas: ${contadorTransacoes}`;

    historicoTransacoes.push({
        valorTransacao,
        complexidade,
        custoGas,
        custoGasConvertido,
        moeda
    });

    let historicoHTML = '<h3>Histórico de Transações</h3>';
    historicoTransacoes.forEach(transacao => {
        historicoHTML += `
            <p>Valor da Transação: ${transacao.valorTransacao} DOT</p>
            <p>Complexidade: ${transacao.complexidade.charAt(0).toUpperCase() + transacao.complexidade.slice(1)}</p>
            <p>Custo Estimado do Gas: ${transacao.custoGas.toFixed(2)} DOT</p>
            <p>Custo Estimado do Gas em ${transacao.moeda}: ${transacao.custoGasConvertido.toFixed(2)} ${transacao.moeda}</p>
            <hr>
        `;
    });

    document.getElementById('historico').innerHTML = historicoHTML;

    setTimeout(() => {
        historicoTransacoes = [];
        document.getElementById('resultado').innerHTML = '';
        document.getElementById('historico').innerHTML = '';
        contadorTransacoes = 0;
        document.getElementById('contador').innerText = `Transações Simuladas: ${contadorTransacoes}`;
    }, 60000); // 1 minuto
});