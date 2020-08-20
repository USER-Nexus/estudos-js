console.log('Usando of');
for (let letra of 'NodeJS:') {
    console.log(letra)
}

const conteudo = ['NodeJS', 'Express', 'VueJs']
console.log('Usando in:');
for (let i in conteudo) {
    console.log(i)
}

console.log('Usando of:');
for (let i of conteudo) {
    console.log(i)
}

const conteudoMap = new Map([
    ['nodeJs', { abordado: true}],
    ['Express', { abordado: true}],
    ['VueJs', { abordado: false}]
])
console.log('Usando of:');
for (let i of conteudoMap) {
    console.log(i)
}

for (let i of conteudoMap.keys()) {
    console.log(i);
}

for (let i of conteudoMap.values()) {
    console.log(i);
}

for (let [ch, vl] of conteudoMap.entries()) {
    console.log(ch, vl);
}

const s = new Set(['a', 'b', 'c'])
for (let i of s) {
    console.log(i);
}