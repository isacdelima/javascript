// Imprimir Par ou ímpar

// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é par ou ímpar

const quantidade = 5
for (num = 1;num <= quantidade;num++){
function ImprimirParImpar (valor){
if (valor % 2 == 0)
{return valor+' Par'}
else if (typeof valor != 'number')
    {return 'Não é um número'}
else {return valor+' Ímpar'}       
}console.log(ImprimirParImpar(num))}
