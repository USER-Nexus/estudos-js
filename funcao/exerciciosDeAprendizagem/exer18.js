function escreverNumero(num) {
    switch (num) {
        case 0:
            return 'Zero'
        case 1: 
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Três'
        case 4: 
            return 'Quatro'
        case 5:
            return 'Cinco'
        case 6:
            return 'Seis'
        case 7:
            return 'Sete'
        case 8:
            return 'Oito'
        case 9: 
            return 'Nove'
        case 10:
            return 'Dez'
        default:
            return 'Numero fora de série'
    }
}

console.log(escreverNumero(0))
console.log(escreverNumero(1))
console.log(escreverNumero(2))
console.log(escreverNumero(3))
console.log(escreverNumero(4))
console.log(escreverNumero(5))
console.log(escreverNumero(6))
console.log(escreverNumero(7))
console.log(escreverNumero(8))
console.log(escreverNumero(9))
console.log(escreverNumero(10))