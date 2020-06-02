function Aula(nome, Id) {  
    this.nome = nome
    this.Id = Id
}

const aula1 = new Aula('AulaA', 123)
const aula2 = new Aula('AulaB', 456)
console.log(aula1, aula2)


//Simulando New
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'AulaA', 123)
const aula4 = novo(Aula, 'AulaB', 456)
console.log(aula3, aula4)