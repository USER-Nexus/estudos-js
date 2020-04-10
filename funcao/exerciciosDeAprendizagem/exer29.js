function calculaNumeros() {
    numeros = [2, 4, 6, 8, 12, 14, 16, 18, 21, 23, 25, 27, 29]
    let contadorDentro = 0
    let contadorFora = 0

    for (let i = 0; i < numeros.length; i++) {
        if (i >= 10 && i <= 20) {
            contadorDentro++
        } else {
            contadorFora++
        }
    }

    console.log(`${contadorDentro} números dentro`)
    console.log(`${contadorFora} números fora`)
}

calculaNumeros()