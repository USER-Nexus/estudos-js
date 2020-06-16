const produtos = [
    {nome: 'IPhone', preco: 4000, fragil: true},
    {nome: 'TV', preco: 2000, fragil: true},
    {nome: 'Cadeira', preco: 20, fragil: false},
    {nome: 'Vidro', preco: 19, fragil: true},
    {nome: 'Copo de plástico', preco: 2, fragil: false}
]

console.log(produtos.filter(function(p){
    if(p.preco >= 500) {
        return true
    } else {
        return false
    }
}).filter(function(p){
    if(p.fragil == true) {
        return true
    } else {
        return false
    }
}))


const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))