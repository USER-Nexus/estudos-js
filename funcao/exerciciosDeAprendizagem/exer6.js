function jutosSimples(capital, taxa, tempo) {
    return capital + (capital * taxa * tempo)
}

function jutosComposto(capital, taxa, tempo) {
    return capital * (1 + taxa) ** tempo
}

console.log(jutosSimples(100, 10/100, 2))
console.log(jutosComposto(100, 10/100, 2))