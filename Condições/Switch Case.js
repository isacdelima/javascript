//  --> Teste 1 <--  //

const cargo = "Presidente"
const nome = "Isac"
const nome2 = "Marcos"
const nome3 = "Juliano"

switch (cargo) {
    case 'Presidente':
      console.log("Bem vindo, sr. presidente " + nome + "!");
      break;
    case 'Diretor':
        console.log('Bem vindo, Diretor '+ nome2);    
          break;
    case 'Funcionário':
        console.log ("Bem vindo ao portal, "+ nome3)
        break;

}

  // --> Teste 2 <--  

const raça = 'shih-tzu'

function identificarRaça (){
switch (raça)
{case 'shih-tzu'
 : return 'São dóceis, geralmente apresentam sedentarismo'
 break
 case 'pitbull'
 : return 'São grandes e fortes, muito usados como cão-guarda'
 break;
 case 'pinscher'
 : return 'Pequenos e extremamente agitados!'
 break;

 default : return 'Raça não encontrada! Tente novamente'
 break;

}}
console.log(identificarRaça())
