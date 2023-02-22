// Concatenar e cortar Arrays

const paisesEuropa = ['Alemanha','Espanha','Dinamarca']
const paisesAsia = ['Japão','Singapura','Coréia do Sul']

// Concatenar - Para concatenar deve usar-se o método concat

const paisesEurasia = paisesEuropa.concat(paisesAsia)

// cortar - Para cortar deve-se usar o método slice

const novosPaises = paisesEurasia.slice(1,4)

console.log(novosPaises)
