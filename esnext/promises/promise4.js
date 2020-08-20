function gerarNumeros(min, max, tempo) {
    if (min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) - min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarLista() {
    return Promise.all([
        gerarNumeros(1, 50, 5000),
        gerarNumeros(1, 50, 4000),
        gerarNumeros(1, 50, 3000),
        gerarNumeros(1, 50, 2000),
        gerarNumeros(1, 50, 1000)
    ])
}

gerarLista()
    .then(resultado => console.log(resultado))