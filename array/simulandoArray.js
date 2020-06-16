const quaseArray = {0: 'Lucas', 1: 'Maria', 2: 'Vitor'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})
console.log(quaseArray[0])

const meuArray = ['Clara', 'Tina']
console.log(quaseArray.toString(), meuArray)