// Função soma

// Criar função de soma 
// Soma todos os múltiplos de 3 e 5
// Determinar um Range para somar os valores
somar ();
function somar (valor){
  let  resSoma = 0
    for (let num=0;num<=valor;num++){
        if (num % 3 === 0 || num % 5 === 0 )    
        {resSoma += num}
 }
 console.log(resSoma)}

