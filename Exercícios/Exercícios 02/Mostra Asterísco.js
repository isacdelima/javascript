// Contador de asteríscos

// Criar função que mostra asteríscos
// Variando de acordo com o valor inputado

//Resolução 1(Usando Repeat)

const valorEntrada = 10
for (indice=1;indice<=valorEntrada;indice++)
{console.log('*'.repeat(indice))}

//Resolução 2 (Usando uma função de atribuição)

mostrarAsteriscos(10);
function mostrarAsteriscos (limitelinhas){
    let padrão = ''
    for(quant=1;quant<=limitelinhas;quant++)
    {padrão += '*'
    console.log(padrão)}}

