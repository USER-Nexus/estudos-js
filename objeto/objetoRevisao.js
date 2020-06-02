const produto = new Object
produto.nome = 'Cadeira'
produto['marca'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 99999,
    proprietario: {
        nome: 'Raul',
        idade: 30,
        endereco: {
            lagodouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 23
    }],
    calcularValorSeguro: function () {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['lagodouro'] = 'Av Qualquer'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)