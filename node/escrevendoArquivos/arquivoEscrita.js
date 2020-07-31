const fs = require('fs')

const produto= {
    nome: 'Celular',
    preco: 1799.99,
    id: 13
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo...')
}) 