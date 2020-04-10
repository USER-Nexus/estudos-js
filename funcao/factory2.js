function criarProduto(_nome, _preco, _desconto = 0.10) {
    return {
        nome: _nome,
        preco: _preco,
        desconto: _desconto
    }
}

console.log(criarProduto('Celular', 1999))


function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Celular', 1999))
console.log(criarProduto('Carro', 24999))
console.log(criarProduto('Frutas', 24.99))
