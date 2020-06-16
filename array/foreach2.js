Array.prototype.forEach2 = function(funcao) {   
    for(i = 0; i < this.length; i++) {
        funcao(this[i], i, this)
    }
}

const aprovados = ['Carlos', 'Viviane', 'Alexa']
aprovados.forEach2(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})