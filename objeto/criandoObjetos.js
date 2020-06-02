const obj1 = {

}
console.log(obj1)


console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)


function Produto(nome, preco, desc) {
    this.nome = nome
    this.getDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Cadeira', 49.99, 0.2)
console.log(p1.getDesconto(), p2.getDesconto())


function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('Lucas', 8999, 4)
const f2 = criarFuncionario('Luana', 12999, 1)
console.log(f1.getSalario(), f2.getSalario())


const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)