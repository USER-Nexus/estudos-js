function pedido(codigo, quantidade) {
    switch (codigo) {
        case 100:
            return quantidade * 3.00
        case 200:
            return quantidade * 4.00
        case 300:
            return quantidade * 5.50
        case 400:
            return quantidade * 7.50
        case 500: 
            return quantidade * 3.50
        case 600:
            return quantidade * 2.80
        default:
            return 'Esse produto não existe'
    }
}

console.log(pedido(100, 1))
console.log(pedido(200, 2))
console.log(pedido(300, 3))
console.log(pedido(400, 4))
console.log(pedido(500, 5))
console.log(pedido(600, 6))
