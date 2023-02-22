// Faixa de preço

// O usuário informa uma faixa de valores, e são retornados
// carros nessa faixa de preço.

const carros = {
    gol:  70000,
    duster: 85000,
    corollaCross : 160000,
    jeep : 190000,
}


for (preço in carros){
 retornaProdutos(0,100000);
function retornaProdutos(valorMin,valorMax){
if (carros[preço] >= valorMin && carros[preço] <=valorMax)
        {console.log(`${preço} ${carros[preço]}`)}}}

      

