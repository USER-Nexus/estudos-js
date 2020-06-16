const alunos = [
    { nome: 'Lucas', nota: 4.5},
    { nome: 'Luana', nota: 2.6},
    { nome: 'Maria', nota: 6.5},
    { nome: 'Ana', nota: 7.9},
    { nome: 'Vitor', nota: 1.3}
]

//Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)


//Declarativo
const getNota = alunos => alunos.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)