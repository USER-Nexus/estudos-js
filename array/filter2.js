Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    } 
    return newArray
}

const produtos = [
    {nome: 'IPhone', preco: 4000, fragil: true},
    {nome: 'TV', preco: 2000, fragil: true},
    {nome: 'Cadeira', preco: 20, fragil: false},
    {nome: 'Vidro', preco: 19, fragil: true},
    {nome: 'Copo de plástico', preco: 2, fragil: false}
]

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter2(caro).filter2(fragil))