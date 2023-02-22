// Esse código encontra a porcentagem de A em b
// Por exemplo: 12 é quantos por cento de 100
// Sendo 12 = a e 100 = b


const porcentagem = (a,b) => {
   return  a + ' equivale a ' + (a*100)/b + '% de ' + b
}

console.log(porcentagem(25,50))