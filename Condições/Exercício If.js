/* 'Escreva uma função com dois números, 
e que retorne o maior dentre eles.' */

// Resolução 01 (if)

function comparação(n1,n2)
{if (n1 >n2){return n1}
else {return n2}}
console.log(comparação(3,2))

//Resolução 02 (Operador ternário)

function comparação2 (num1,num2)
{num1>num2?console.log(num1):console.log(num2)}
comparação2(6,4)