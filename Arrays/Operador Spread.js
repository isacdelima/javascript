// Operador Spread (...)

// O Spread é usado para clonar um objeto (Array,string...)
// Ele também pode ser usado para concatenar Arrays.

const numeros0a5 = [0,1,2,3,4,5]
const numeros6a10 = [6,7,8,9,10]

const concatenados = [...numeros0a5,...numeros6a10]

console.log(concatenados)

