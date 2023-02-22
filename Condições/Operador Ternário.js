//06/01/2023

let altura = 160
const resultado = altura<= 165? altura += 25 : "Você pode servir à marinha"
console.log(resultado)

//16/01/2023

function preço (valor){
    valor >= 500 && valor <1000?console.log ('Você ganhou 5% de desconto'):
    valor >= 1000 && valor <5000?console.log ('Você ganhou 10% de desconto'):
    valor >=5000? console.log('Você ganhou um desconto de 20%')
    : console.log ('Você não ganhou brindes!')
}
preço()