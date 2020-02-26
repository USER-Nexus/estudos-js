// Generate a sequence of numbers
function getRandom (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

var array = []
for (var i = 0; i < 4; i++){
    array.push(getRandom(0, 10))
}
console.log(array)

// Build a password
var pass = 0
for (var i = 0; i < array.length; i++){
    pass += array[i]
}

// Request password
var readline = require('readline')
var asn = ''
var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

reader.question('What is the password? ', function(answer){
    asn = answer
    if(asn == pass){
        console.log('The password is correct . . . ')
    }
    else{
        console.log('The password is incorrect . .  .')
    }
    reader.close()
})