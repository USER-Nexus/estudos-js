function gerarNumero(min, max) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(function(resolve) {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)    
    })
}

gerarNumero(1, 10)
    .then(num => num * 10)
    .then(num10 => `O número foi: ${num10}`)
    .then(console.log)