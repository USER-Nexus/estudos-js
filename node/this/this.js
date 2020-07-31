console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function testeThis() {
    console.log('Dentro da função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}
testeThis()