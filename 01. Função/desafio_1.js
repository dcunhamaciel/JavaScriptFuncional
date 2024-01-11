// somar(3)(4)(5)
function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

console.log(somar(3)(4)(5))

// fn -> 3 * 7
// fn -> 8 / 2
// fn -> 6 - 5
// calcular(3)(7)(fn)

function calcular(a) {
    return function (b) {
        return function (fn) {
            return fn(a, b)
        }
    }
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    return a / b
}

function subtrair(a, b) {
    return a - b
}

console.log(calcular(3)(7)(multiplicar))
console.log(calcular(8)(2)(dividir))
console.log(calcular(6)(5)(subtrair))