// Função em JS é First-Class Object (citizens)
// Higth-Order function

// criar uma função literal
function fun1() {}

// amarzenar em uma variável
const fun2 = function () {}

// armazenar em uma array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// armazenar em um atributo de um objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// passar função como param
function run(fun) {
    fun()
}
run(function () { console.log('Executado...')})

// uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)