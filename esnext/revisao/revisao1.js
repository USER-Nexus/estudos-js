// let e const
{
    var a = 1
    let b = 2 
    console.log(b)
}
console.log(a)

// Template String
const produto = 'IPhone'
console.log(`${produto} está a venda`)

// Destructuring
const [l, e, ...abc] = 'Cod3r'
console.log(l, e, abc)

const [x, y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = { nome: 'Lucas', idade: 14}
console.log(i, nome)