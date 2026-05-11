const calcularValorPedido = require('./calcular-valor-pedido');

it('não deve rodar valor de frete quando o valor dos produtos for maior que 500', () => {
    // AAA (Arrange, Act, Assert)

    // ARRANGE - ARRUMAR - O OBJETIVO DO TESTE
    const meuPedido = {
        itens: [
            { nome: 'Arco encantado', valor: 2000 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    }

    // ACT - AÇÃO - O QUE VAMOS TESTAR
    const resultado = calcularValorPedido(meuPedido)

    // ASSERT - ASSERÇÃO - O QUE ESPERAMOS QUE ACONTEÇA
    expect(resultado).toBe(2000);
});

it('deve rodar valor de frete quando o valor dos produtos for menor que 500', () => {
    // AAA (Arrange, Act, Assert)

    // ARRANGE - ARRUMAR - O OBJETIVO DO TESTE
    const meuPedido = {
        itens: [
            { nome: 'Sanduíche', valor: 50 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    // ACT - AÇÃO - O QUE VAMOS TEST
    const resultado = calcularValorPedido(meuPedido)

    // ASSERT - ASSERÇÃO - O QUE ESPERAMOS QUE ACONTEÇA
    expect(resultado).toBe(150);
});

it('deve rodar valor de frete quando o valor dos produtos for igual a 500', () => {
    // AAA (Arrange, Act, Assert)

    // ARRANGE - ARRUMAR - O OBJETIVO DO TESTE
    const meuPedido = {
        itens: [
            { nome: 'Sanduíche bem caro', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    // ACT - AÇÃO - O QUE VAMOS TEST
    const resultado = calcularValorPedido(meuPedido)

    // ASSERT - ASSERÇÃO - O QUE ESPERAMOS QUE ACONTEÇA
    expect(resultado).toBe(600);
});

// CASO OS ESTADOS DE ENTREGA SEJAM RS OU SC, DEVE SER ACRESCENTADO UM VALOR DE 30% NA ENTREGA
it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja RS', () => {
    const pedidoComEstadoRS = {
        estado: 'RS',
        itens: [
            { nome: 'Sanduíche bem caro', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoRS);

    expect(resultado).toBe(620); // 500 (produto) + 100 (entrega) + 20% de 100 (acréscimo) = 620
});

it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SC', () => {
    const pedidoComEstadoSC = {
        estado: 'SC',
        itens: [
            { nome: 'Sanduíche bem caro', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoSC);

    expect(resultado).toBe(620); // 500 (produto) + 100 (entrega) + 20% de 100 (acréscimo) = 620
});

it('não deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SP', () => {
    const pedidoComEstadoSP = {
        estado: 'SP',
        itens: [
            { nome: 'Sanduíche bem caro', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoSP);

    expect(resultado).toBe(600); // 500 (produto) + 100 (entrega) = 600
});