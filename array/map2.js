const carrinho = [
    '{ "nome": "borracha", "preco": "2.99"}',
    '{ "nome": "cadernno", "preco": "22.99"}',
    '{ "nome": "mochila", "preco": "59.99"}'
]

const objeto = json => JSON.parse(json)
const precos = produto => produto.preco

let resultado = carrinho.map(objeto).map(precos)
console.log(resultado)