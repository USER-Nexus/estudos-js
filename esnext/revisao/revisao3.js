// ES8: Object.values e Object.entries
const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome  = 'Carlos'
const pessoas = {
    nome,
    texto() {
        return 'teste'
    }
}
console.log(pessoas.texto())

// Class
class Animal {}
class Cachorro extends Animal {
    latir() {
        return 'Au Au'
    }
}
console.log(new Cachorro().latir())