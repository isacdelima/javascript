// FizzBuzz

// Divisível por 3 ==>  Fizz
// Divisível por 5 ==>  Buzz
// Divisível por 3 e 5 ==>  FizzBuzz
// Não Divisível por 5 ou 3 ==>  Valor Entrada
// Não é um número ==> "Não é um número"

for (num=1;num <= 100;num++){
function fizzBuzz (valorEntrada){
if (typeof valorEntrada !== 'number')
{return 'Não é um número'}
if (valorEntrada % 3 === 0 && valorEntrada % 5 === 0)
{return num + ' FizzBuzz'}
if (valorEntrada % 3 !== 0 && valorEntrada % 5 !== 0)
{return valorEntrada}
if (valorEntrada % 3 === 0)
{return num + ' Fizz'}
if (valorEntrada % 5 === 0)
{return num + ' Buzz'}
} console.log(fizzBuzz(num))}


