class Lancamento {
    constructor(nome = 'genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinaceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamento(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorTotal = 0
        this.lancamentos.forEach(l => {
            valorTotal += l.valor
        })
        return valorTotal
    }
}

const lancamento1 = new Lancamento('salario', 4500)
const lancamento2 = new Lancamento('freelance', 1500)
const lancamento3 = new Lancamento('contaAgua', -300)
const lancamento4 = new Lancamento('contaLuz', -200)
const lancamento5 = new Lancamento('internet', -400)

const contas = new CicloFinaceiro(6, 2020)
contas.addLancamento(lancamento1, lancamento2, lancamento3, lancamento4, lancamento5)
console.log(contas.sumario())