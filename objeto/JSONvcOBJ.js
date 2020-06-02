const obj = {a: 1, b: 2, c: 3, soma() { return a + b + c}}
console.log(JSON.stringify(obj))

// JSON.parse("{a: 1, b: 2, c: 3}")  ERRO
// JSON.parse("{'a': 1, 'b': 2, 'c': 3}") ERRO
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1.2, "b": "texto", "c": true, "d": {}, "e": []}'))