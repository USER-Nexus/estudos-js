let valorFixo = 100
function planoDeSaude(idade) {
    let valorAdcional = 0

    if (idade < 10) {
        valorAdcional = 80
    }

    if (idade >= 10 && idade <= 30) {
        valorAdcional = 50
    }

    if (idade >= 30 && idade <= 60) {
        valorAdcional = 95
    }

    if (idade > 60) {
        valorAdcional = 130
    }

    resultado = valorFixo + valorAdcional

    return console.log(`O valor do seu plano de saúde é de: R$ ${resultado}`)
}

planoDeSaude(5)
planoDeSaude(12)
planoDeSaude(47)
planoDeSaude(82)
