function comprar(carro) {
    switch (carro) {
        case 'hatch':
            console.log('Compra efetuado com sucesso')
            break;
        case 'sedan':
            console.log('Tem certeza que prefere esse modelo ?')
            break;
        case 'motocicleta':
            console.log('Tem certeza que prefere esse modelo ?')
            break;
        case 'caminhonete':
            console.log('Tem certeza que prefere esse modelo ?')
            break;
        default:
            console.log('Não trabalhamos com esse tipo de automóvel aqui')
            break;
    }
}

comprar('hatch')
comprar('sedan')
comprar('motocicleta')
comprar('caminhonete')
comprar('bicileta')
