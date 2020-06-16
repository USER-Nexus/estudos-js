const alunos = [
    {nome: 'Lucas', nota: 7.2, bolsista: false},
    {nome: 'Maria', nota: 3.2, bolsista: true},
    {nome: 'Vitor', nota: 4.6, bolsista: false},
    {nome: 'Carlos', nota: 1.2, bolsista: true},
    {nome: 'Ana', nota: 4.2, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)