// Este código itera sobre um objeto com três propriedades
// Quando uma dessas prop. estar vazia, essa prop. é deletada.

function funcionário (name,surName,age){
    return {name,
    surName,
    age}}

 const isac = funcionário('Isac','Lima',)

for (data in isac){
    if (typeof isac[data] === 'null'
    || typeof isac[data] === 'undefined'
    || isac[data] === '' )

  {delete isac[data]}
}


console.log(isac)
