function verificaTriangulo(l1, l2, l3) {
    if (l1 == l2 && l2 == l3) {
        return 'Equilátero'
    } else if (l1 == l2 || l1 == l3 || l2 == l3) {
        return 'Isóceles'
    } else {
        return 'Escaleno'
    }
}

console.log(verificaTriangulo(2, 2, 2))
console.log(verificaTriangulo(2, 2, 3))
console.log(verificaTriangulo(2, 3, 4))
