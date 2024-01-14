function exec(fn, a, b) {
    return fn(a, b)
}

const somarNoTerminal = (a, b) => console.log(a + b)
const subtrairNoTerminal = (a, b) => console.log(a - b)
const subtrair = (a, b) => a - b

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

console.log(exec(subtrair, 50, 25))

const cb = () => console.log('Exec...')
setInterval(cb, 1000)