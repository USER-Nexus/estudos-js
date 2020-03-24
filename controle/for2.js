const notas = [6.5, 1.5, 5.6, 1.8, 9.3]
for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = { 
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29
}

for (let atributos in pessoa) {
    console.log(`${atributos} = ${pessoa[atributos]}`)
}
