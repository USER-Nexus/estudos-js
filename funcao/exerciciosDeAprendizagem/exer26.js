function encontrarNumerosPares() {
    let numeros = []
    numero = 1
    while (numero <= 100) {
        if (numero % 2 == 0) {
            numeros.push(numero)
        }
        numero++
    }
    return numeros
}

console.log(encontrarNumerosPares())