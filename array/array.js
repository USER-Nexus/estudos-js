console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Viviane', 'Cadu', 'Vitor')
console.log(aprovados)

aprovados = ['Vivivane', 'Cadu', 'Vitor']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Maria'
aprovados.push('Lucas')
console.log(aprovados.length)

aprovados[9] = 'Ana'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Viviana', 'Cadu', 'Vitor']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)