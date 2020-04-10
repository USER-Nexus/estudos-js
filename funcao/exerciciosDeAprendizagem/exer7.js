function Bhaskara(ax2, bx, c) {
    delta = Math.pow(bx, 2) - 4 * ax2 * c
    if (delta < 0) {
        console.log('O delta é negativo')
    } else if (delta > 0) {
        console.log('O delta é positivo')
    }
}

Bhaskara(3, -5, 12)
