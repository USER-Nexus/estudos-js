function funcionamento(valor, chance) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chance) {
            reject('Ocorreu um erro')
        } else {
            resolve(valor)
        }
    })
}

funcionamento('teste', 10)
    .then(v => `Valor ${v}`)
    .then(
        v => consol.logg(v),
        err => console.log(`Erro esp: ${err}`)
    )
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim'))