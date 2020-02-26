// par nome/valor
const saudacao = 'Ola' //contexto léxico 1

function exec() {
    const saudacao = 'Opa' //constextp léxico 2
    return saudacao
}

// Objetos sã grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Lucas',
    idade: 32,
    peso: 90,
    endereco: {
        logadouro: 'Rua Haia',
        numero: 21
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)