// estatégia 1 pra gerar valor padrão 
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estatégia 2, 3, 4 para gerar valores padrôes
function soma2(a, b, c) {
    a = a || undefined ? a : 1
    b = 1 in arguments
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}