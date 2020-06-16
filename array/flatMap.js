const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Luana',
        nota: 8.3
    }, {
        nome: 'Carlos',
        nota: 4.7
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Ana',
        nota: 7.2
    }, {
        nome: 'Vitor',
        nota: 2.9
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)
const notas1 = escola.map(getNotaTurma)

console.log(notas1)
console.log([].concat([ 8.3, 4.7 ], [ 7.2, 2.9 ]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaTurma)
console.log(notas2)