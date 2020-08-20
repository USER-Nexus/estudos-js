// Arrow function
const soma = (a, b) => a + b
console.log(soma(2, 5))

const texto = nome => 'Lucas'
console.log(texto())

// Arrow function (this)
const lexicon1 = () => console.log(this === exports)
const lexicon2 = lexicon1.bind({})
lexicon1()
lexicon2()

// Parametros default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('JavaScript')

// Operador Rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1, 2, 3, 4))