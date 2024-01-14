const dobro = numero => numero * 2

const numeros = [1, 2, 3, 4, 5]
const numerosDobro = numeros.map(dobro)

console.log(numeros)
console.log(numerosDobro)

const primeiraLetra = nome => nome[0]

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const letras = nomes.map(primeiraLetra)

console.log(nomes)
console.log(letras)