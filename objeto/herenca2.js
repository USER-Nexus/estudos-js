//Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0' //Não fazer isso
const avo = {attr1: '1'}
const pai = {__proto__: avo, attr2: '2'}
const filho = {__proto__: pai, attr3: '3'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} km/h de ${this.velMax} km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 340 //shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerar(100)
console.log(volvo.status())

ferrari.acelerar(300)
console.log(ferrari.status())