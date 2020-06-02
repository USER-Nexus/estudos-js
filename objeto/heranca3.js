const pai = { nome: 'Pedro', corDoCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.nome, filha1.corDoCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Luiza', writable: false, enumerable: true}
})
console.log(filha2.nome, filha2.corDoCabelo)


console.log(Object.keys(pai))
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}