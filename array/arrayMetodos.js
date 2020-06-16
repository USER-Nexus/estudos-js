const carros = ['LaFerrari', 'Huayra', 'Regera', 'Chiron']
carros.pop() // Remove o ultimo item do array
console.log(carros)

carros.push('FXXZ') // Adciona um item no final do array
console.log(carros)

carros.shift() // Remove um item no inicio do array 
console.log(carros)

carros.unshift('Agera') // Adciona um item no inicio do array
console.log(carros)

carros.splice(3, 1) // Adciona e remove elementos do array
console.log()

const algunsCarros1 = carros.slice(2) // Cria um novo array
console.log(algunsCarros1)

const algunsCarros2 = carros.slice(1, 4)
console.log(algunsCarros2)