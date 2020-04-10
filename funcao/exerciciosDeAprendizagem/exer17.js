const salario = 2000

function aumento(plano) {
    switch (plano) {
        case 'A':
            return salario * 1.10
        case 'B':
            return salario * 1.15
        case 'C':
            return salario * 1.20
        default:
            return 'Plano inválido'
    }
}

console.log(aumento('A'))
console.log(aumento('B'))
console.log(aumento('C'))
console.log(aumento('D'))
