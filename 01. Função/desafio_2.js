const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lápis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

// 1. fragil: true
const fragil = item => item.fragil

const produtosFrageis = carrinho.filter(fragil)

console.log(produtosFrageis)

// 2. quantidade * preço -> total
const total = item => item.qtde * item.preco

const produtosTotal = carrinho.map(total)

console.log(produtosTotal)

// 3. média dos totais
const media = (acumulador, elemento) => {
    const qtdAtual = acumulador.qtd + 1
    const totalAtual = acumulador.total + elemento
    const mediaAtual = totalAtual / qtdAtual

    return {
        qtd: qtdAtual, 
        total: totalAtual, 
        media: mediaAtual
    }
}

const mediaProdutosFrageis = carrinho
    .filter(fragil)
    .map(total)
    .reduce(media, { qtd: 0, total: 0, media: 0 })

console.log(mediaProdutosFrageis.media)