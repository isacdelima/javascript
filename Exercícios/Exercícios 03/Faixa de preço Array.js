// Ordenador de valores

// Crie um Array com Valores.
// Crie uma função onde o cliente determina o range de valores que deseja
// ,os valores são retornados em ordem crescente.

const faixa = [50,90,100,150,870,46
,569,248,39,740,8595,-48]

function valores(min,max){
for (valor of faixa.sort((a, b) => a - b)){
if (valor >= min && valor <= max){
    console.log(valor)}}} 

valores(10,1000)