# O que aprendi sobre Testes Automatizados com Jest

## Sobre o projeto

Neste projeto desenvolvi uma função `calcularValorPedido` em JavaScript, que calcula o valor total de um pedido levando em conta regras de frete, valores mínimos e acréscimos por estado. Para garantir que a função funcionasse corretamente, utilizei o **Jest** — um framework de testes automatizados para JavaScript.

## O que é o Jest?

O Jest é um framework de testes para JavaScript criado pelo Facebook. Ele permite escrever testes automatizados que verificam se o seu código está se comportando da maneira esperada, sem precisar testar manualmente a cada alteração.

## O que achei mais interessante

O ponto que mais me chamou atenção foi a possibilidade de **rodar os testes em modo watch** (`jest --watchAll`), onde os testes são executados automaticamente a cada vez que você salva o arquivo. Isso cria um ciclo muito produtivo: você escreve o código, salva, e na hora já sabe se algo quebrou ou funcionou.

Essa dinâmica de feedback imediato torna o desenvolvimento muito mais seguro e ágil.

## Como funciona na prática

Os testes seguem o padrão **AAA (Arrange, Act, Assert)**:

- **Arrange** — montar o cenário do teste (ex: criar um pedido de exemplo)
- **Act** — executar a função que será testada
- **Assert** — verificar se o resultado é o esperado

Exemplo do projeto:

```javascript
it('não deve cobrar frete quando o valor dos produtos for maior que 500', () => {
  const meuPedido = {
    itens: [
      { nome: 'Arco encantado', valor: 2000 },
      { nome: 'Entrega', valor: 100, entrega: true }
    ]
  };

  const resultado = calcularValorPedido(meuPedido);

  expect(resultado).toBe(2000);
});
```

## Instalação

A instalação foi um pouco desafiadora no início, mas é simples depois que você entende os passos:

```bash
npm install --save-dev jest
```

E no `package.json`, configurar o script de teste:

```json
"scripts": {
  "test": "jest",
  "watch": "jest --watchAll *.js"
}
```

## Conclusão

Apesar da curva inicial de configuração, os testes automatizados com Jest são muito simples de escrever e extremamente úteis. O maior benefício é a **confiança no código**: qualquer erro introduzido durante o desenvolvimento é apontado imediatamente, indicando exatamente qual teste falhou e o que era esperado vs. o que foi recebido.

Testar antes ou junto com o desenvolvimento (prática conhecida como **TDD — Test Driven Development**) é uma habilidade valiosa para qualquer desenvolvedor.
