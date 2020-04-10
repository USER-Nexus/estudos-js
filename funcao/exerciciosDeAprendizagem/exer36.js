function calcula1(vetor1, num1) {
    vetorResultado = []
    for (let i = 0; i < vetor1.length; i++) {
        resultado = vetor1[i] * num1
        vetorResultado.push(resultado)
    }
 
    console.log(vetorResultado)
}

function calcula2(vetor2, num2) {
    vetorResultado2 = []

    for (let i = 0; i < vetor2.length; i++) {
        if (vetor2[i] > 5) {
            resultado2 = vetor2[i] * num2
            vetorResultado2.push(resultado2)
        }
    }

    console.log(vetorResultado2)
}

vetor1 = [2, 4, 6, 8, 10]
calcula1(vetor1, 2)

vetor2 = [1, 3, 5, 7, 9, 11]
calcula2(vetor2, 3)