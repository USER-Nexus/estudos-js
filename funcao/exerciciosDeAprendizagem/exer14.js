function comprar(fruta) {
    switch (fruta) {
        case 'maça':
            console.log('Não vendemos essa fruta aqui')
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwi')
            break;
        case 'melancia':
            console.log('Aqui está, são R% 3,00 o quilo')
            break;
        default:
            console.log('Erro ao indentificar a fruta')
            break;
    }
}

comprar('maça')
comprar('kiwi')
comprar('melancia')
comprar('limão')
