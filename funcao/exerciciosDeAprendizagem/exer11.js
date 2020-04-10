function calcularAno(ano) {
    if (ano <= 0) {
        return false
    } else if(ano % 400 == 0) {
        return true
    } else if(ano % 100 == 0) {
        return false
    } else if(ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(calcularAno(0))
console.log(calcularAno(4))
console.log(calcularAno(2019))
console.log(calcularAno(2020))
console.log(calcularAno(2045))
console.log(calcularAno(3040))