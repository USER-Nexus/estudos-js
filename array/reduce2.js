const alunos = [
    {nome: 'Lucas', nota: 7.2, bolsista: false},
    {nome: 'Maria', nota: 3.2, bolsista: true},
    {nome: 'Vitor', nota: 4.6, bolsista: false},
    {nome: 'Carlos', nota: 1.2, bolsista: true},
    {nome: 'Ana', nota: 4.2, bolsista: false}
]

//Exer1: Todos os alunos são bolsistas ?

const resultado1 = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(p => p.bolsista).reduce(resultado1))

//Exer2: Algum aluno é bolsista ?

const resultado2 = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(p => p.bolsista).reduce(resultado2))