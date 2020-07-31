const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulher = funcionarios => funcionarios.genero === 'F'
const chinesa = funcionarios => funcionarios.pais === 'China'
const salario = (funcionario, atual) => {
    return funcionario.salario < atual.salario ? funcionario : atual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(mulher).filter(chinesa).reduce(salario))
})