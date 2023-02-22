// Encontre a igualdade

// Analise dois objetos, e retorne se ambos.
// Possuem os mesmos valores dentre as propriedades.
// E se possuem o mesmo na espaço na memória (referência).

function dadosFuncionário (nome,idade,funcao,salario) {
   return { nome,
    idade,
    funcao,
    salario}}

let isac = dadosFuncionário('Isac','18','Estudante',300)
const fernando = dadosFuncionário('Fernando','48','Gerente',12000)
let pedro = dadosFuncionário('Isac','18','Estudante',300)

function encontrarIgualdade (pessoa1,pessoa2){
   return  pessoa1.nome === pessoa2.nome &&
    pessoa1.idade === pessoa2.idade &&
    pessoa1.funcao === pessoa2.funcao &&
    pessoa1.salario === pessoa2.salario
}
console.log(encontrarIgualdade(isac,isac))

function espaçoMemória (pessoa1,pessoa2){
    return pessoa1 === pessoa2
}
console.log(encontrarIgualdade(isac,pedro))
