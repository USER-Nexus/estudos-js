function gerarNumero(min, max, numerosProibidos) {
    if(min > max) [max, min] = [min, max]
    return new Promise(function(resolve) {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Números proibidos') 
        } else {
            resolve(aleatorio)    
        }
    })
}

async function gerarNumerosMegaSena(qtdDeElementos, tentativas = 1) {
    try {
        const numeros = []
        for(let _ of Array(qtdDeElementos).fill()) {
            numeros.push(await gerarNumero(1, 60, numeros))
        }    
    } catch(e) {
        if (tentativas > 10) {
            throw 'Erro'
        } else {
            gerarNumerosMegaSena(qtdDeElementos, tentativas + 1)
        }
    }
}

gerarNumerosMegaSena(15)
    .then(console.log)
    .catch(console.log)