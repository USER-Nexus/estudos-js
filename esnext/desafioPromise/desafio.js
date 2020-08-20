const fs = require('fs')
const path = require('path')

function exibir(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

exibir(caminho)
    .then(conteudo => console.log(conteudo))