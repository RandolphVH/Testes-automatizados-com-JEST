const acrescimoValorEntrega = 0.2; // 20% de acréscimo para RS e SC

const calcularValorPedido = pedido => {
    const valorProdutos = pedido.itens
        .filter(item => !item.entrega)
        .reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0);

    const entrega = pedido.itens.filter(item => item.entrega);

    if (pedido.estado === 'RS' || pedido.estado === 'SC') {
        const acrescimoEntrega = entrega[0].valor * acrescimoValorEntrega; // 20% de acréscimo para RS e SC
        entrega[0].valor += acrescimoEntrega;
    }

    return (valorProdutos > 500) ? valorProdutos : valorProdutos + entrega[0].valor;

    // refaturou o código usando operador ternário, que é uma forma mais enxuta de escrever um if-else. O operador ternário tem a seguinte sintaxe: condição ? valor_se_verdadeiro : valor_se_falso. No caso, a condição é se o valor dos produtos é maior que 500, se for verdadeiro retorna o valor dos produtos, caso contrário retorna o valor dos produtos mais o valor do frete.
    // if (valorProdutos > 500) {
    //     return valorProdutos;
    // } else {
    //     return valorProdutos + entrega[0].valor;
    // }
}

// pedido.itens.reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0);

module.exports = calcularValorPedido;