function adcionar() {
    vetorPilha = [1, 2, 3, 4, 5]
    vetorAdciona = [6, 7, 8, 9, 10]

    for (let i = 0; i < vetorPilha.length; i++) {
        vetorAdciona.push(vetorPilha[i])
    }

    console.log(vetorAdciona)
}

adcionar()