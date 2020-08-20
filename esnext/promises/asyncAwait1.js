function esperar(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo);
    })
}

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 3000);
    })
}

async function executar() {
    let valor = await retornarValor()
    
    await esperar(1000)
    console.log(`Execuntando Async/Await ${valor} ...`)
    await esperar(1000)
    console.log(`Execuntando Async/Await ${valor + 1} ...`)
    await esperar(1000)
    console.log(`Execuntando Async/Await ${valor + 2} ...`)

    return `Valor: ${valor + 3}`
}

executar()
    .then(console.log)