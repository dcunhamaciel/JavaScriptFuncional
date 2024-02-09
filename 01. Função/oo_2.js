class Produto {
    constructor(nome, preco, desconto = 0.15) {
        this.nome = nome
        this.preco = preco
        this.desconto = desconto
    }

    get nome() {
        return `Produto: ${this._nome}`
    }

    set nome(novoNome) {
        this._nome = novoNome.toUpperCase()
    }

    get precoFinal() {
        return this.preco * (1 - this.desconto)
    }
}

const p1 = new Produto('Caneta', 8.59)
//p1.nome = 'caneta'
console.log(p1.nome)

const p2 = new Produto('Geladeira', 3000.0)
console.log(p2.preco)
console.log(p2.precoFinal)