Array.prototype.map2 = function(funcao) {
    const novoArray = []
    for(i = 0; i < this.length; i++) {
        novoArray.push(funcao(this[i], i, this))
    }
    return novoArray
}

const carrinho = [
    '{ "nome": "borracha", "preco": "2.99"}',
    '{ "nome": "cadernno", "preco": "22.99"}',
    '{ "nome": "mochila", "preco": "59.99"}'
]

const objeto = json => JSON.parse(json)
const precos = produto => produto.preco

let resultado = carrinho.map2(objeto).map2(precos)
console.log(resultado)