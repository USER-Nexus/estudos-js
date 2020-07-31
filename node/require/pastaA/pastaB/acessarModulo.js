const moduloA = require('../../../sistemaDeModulo/moduloA')
console.log(moduloA.mensagem1)

const acessarMoodulo2 = require('./pastaC/acessarModulo2')
console.log(acessarMoodulo2.mensagem6)

const http = require('http')
http.createServer((req, res) => {
    res.write('Ola')
    res.end()
}).listen(8000)

