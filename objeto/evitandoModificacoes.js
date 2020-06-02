// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Item'
})
console.log('Extensivo: ', Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'item escolar'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Julia', idade: 21}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Alves'
delete pessoa.nome
pessoa.idada = 31
console.log(pessoa)

// Object.freeze = selado + valores constantes
const carro = { marca: 'Pagani', modelo: 'Huayra', status: 'Indisponível'}
Object.freeze(carro)
console.log('Congelado: ', Object.isFrozen(carro))

carro.preco = 3499999
delete carro.status
carro.modelo = 'BMW'
console.log(carro)