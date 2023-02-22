// Este código retorna a quantidade de vezes 
// que determinada letra aparece em uma frase.


const caçaLetras = (letra,frase) => {
quantidade = 0
 for (let i in frase){
  if (frase[i] === letra)
    {quantidade ++}
}

if (quantidade === 0 )
{return `a letra '${letra}' Não aparece nenhuma vez.` }
if (quantidade == 1 )
{return(`a letra '${letra}' aparece apenas 1 vez`)}
else {return `a letra '${letra}' aparece um total de ${quantidade} vezes.` }
}

console.log(caçaLetras('a','abóbora'))