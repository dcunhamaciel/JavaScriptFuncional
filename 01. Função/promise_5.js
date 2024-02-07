function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else { 
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(valor => `Valor: ${valor}`)
    .then(
        valor => console.log(valor),
        erro => console.log(`Erro Específico: ${erro}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(erro => console.log(`Erro: ${erro}`))
    .then(() => console.log('Fim!'))