// Medidor de Velocidade 

// Velocidade Máxima = 70 Km
// A cada 5km do limite se perde um ponto
// Caso passe de 12 pontos => Carteira suspensa
// Dica > Math.Floor() < (Arredonda Valor p/ inteiro)
 
function medidorVelocidade(velocidade){
if (typeof velocidade !== 'number')    
{return 'Não é um número'}
const excedente = (velocidade - 70)
let pontos = Math.floor(excedente/5)
if (typeof velocidade !== 'number')    
{return 'Não é um número'}
if (pontos > 12)
{return 'Carteira suspensa'}
if  (velocidade<=70)
  {return 'Ok'}
if (pontos == 1)
   {return console.log(pontos + ' Ponto')}
else {return console.log(pontos + ' Pontos')}
 }

console.log(medidorVelocidade(135))
