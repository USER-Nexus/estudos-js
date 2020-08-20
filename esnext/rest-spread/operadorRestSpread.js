// Operador rest(juntar) / spread(espanhar)

// Usar rest com parâmetro de função

// Usar spread com objeto

const funcionario = { nome: 'Ana', salario: 1250.99}
const clone = { ativo: true, ...funcionario }
console.log(clone)

// Usar spread com array
const grupoA = ['Joâo', 'Pedro', 'Maria']
const grupoFinal = ['Vitor', ...grupoA, 'Carlos' ]
console.log(grupoFinal)