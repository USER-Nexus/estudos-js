function calculaConceito(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 0.0 && vetor[i] <= 4.9) {
            console.log('Conceito D')
        } else if (vetor[i] >= 5 && vetor[i] <= 6.9) {
            console.log('Conceito C')
        } else if (vetor[i] >= 7 && vetor[i] <= 8.9) {
            console.log('Concieto B')
        } else if (vetor[i] >= 9 && vetor[i] <= 10) {
            console.log('Conceito A')
        }
        
    }
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
calculaConceito(vetor)