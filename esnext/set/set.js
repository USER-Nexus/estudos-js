// Não aceita repetição  e não é indexida
const times = new Set()
times.add('Cruzeiro')
times.add('Atlético MG').add('Américas').add('São Paulo')
times.add('Cruzeiro')

console.log(times)
console.log(times.size)
console.log(times.has('São Paulo'))
times.delete('Atlético MG')
console.log(times.has('Atlético MG'))

const nomes = ['Lucas', 'Vitor', 'Ana', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)