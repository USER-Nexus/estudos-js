function escreverFrase(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000) 
    })
}

escreverFrase(3, 'Teste Completo')
    .then(frase => frase.concat(' Número do teste: 1'))
    .then(frase2 => console.log(frase2))
    .catch(e => console.log(e))