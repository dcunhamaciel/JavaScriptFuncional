function Produto(nome, preco, desconto = 0.15) {
    this.nome = nome
    this.preco = preco
    this.desconto = desconto

    this.precoFinal = function() {
        return this.preco * (1 - this.desconto)
    }
}

console.log(typeof Produto)
console.log(typeof Promise)
console.log(typeof Object)

const p1 = new Produto('Caneta', 8.59)
console.log(p1.nome)

const p2 = new Produto('Geladeira', 3000.0)
console.log(p2.preco)
console.log(p2.precoFinal())