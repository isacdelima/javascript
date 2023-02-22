// Mostra Números Primos

// Número primo é aqle q só se divide por 1 e por si próprio...
// Considerando que queremos um resultado inteiro.

exibirNumerosPrimos(1000);
function exibirNumerosPrimos(limite){
    for (n=2;n<=limite;n++){
        if (numeroPrimo(n))
          {console.log(n)};
    }
}

function numeroPrimo (n){
for (let divisor=2;divisor<n;divisor++){
 if (n%divisor===0)
     return false};
   return true
}