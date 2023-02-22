// Factory Functions - Funções de Fábrica

function pessoa (primeiroNome,sobrenome,idade,patrimônio){
    return {nomeCompleto : primeiroNome + ' ' + sobrenome,
    idade,
    patrimônio
}}
const isac = pessoa('Isac','Lima',18,Math.floor(300))
console.log(isac)
const caito = pessoa('Caito','Maia',54,Math.floor(2000000000))
console.log(caito)

