const moduloA = require('./moduloA') // ".js" não é necessário
const moduloB = require('./moduloB')

console.log(moduloA.mensagem1)
console.log(moduloA.mensagem2)
console.log(moduloA.mensagem3)
console.log(moduloA)

console.log(moduloB.mensagem4)
console.log(moduloB.mensagem5())
console.log(moduloB)