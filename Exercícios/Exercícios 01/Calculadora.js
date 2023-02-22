// Dia 07/01/2023

const calculadora = {
soma : function (n1=0,n2=0){
    return n1+n2}
,duplica : function (valor){
    return valor*2
}}
soma = calculadora.soma
console.log(soma(97+77))
duplica = calculadora.duplica
console.log(duplica(102))

// Dia 16/01/2023 (Calculadora mais avançada)

function calcular(valor1,valor2,operação){
    const somar = valor1 + valor2
    const subtração = valor1 - valor2
    const multiplicação = valor1*valor2
    const divisão = valor1/valor2
     switch (operação){
         case 'soma': 
         return somar
         case 'subtração': 
         return subtração
         case 'multiplicação': 
         return multiplicação
         case 'divisão': 
         return divisão
         default : return 'Operadores inválidos'}
 }
 console.log(calcular(50,20,'divisão'.toLowerCase()))