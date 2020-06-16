const aprovados = ['Lucas', 'Vitor', 'Ana', 'Maria', 'Luana']

aprovados.forEach(function(nome, indice, array, x) {
    console.log(`${indice + 1}: ${nome}`)
    console.log(array)
    console.log(x)
})

aprovados.forEach(nome => console.log(nome))

const exibrirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibrirAprovados)