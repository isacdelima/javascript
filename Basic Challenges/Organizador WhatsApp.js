// Esse código itera sobre um array de objetos
// ele retorna o usuaário no console na seguinte ordem:
// 1 - Usuário 2 - Admin 3 - Others

const whatsapp = [
    {itsMe:true,admin:false,name:'Isac'},
    {itsMe:false,admin:false,name:'Fernanda'},
    {itsMe:false,admin:true,name:'Pedro'},
    {itsMe:false,admin:true,name:'Gabriel'}]

for (i in whatsapp){
    if (whatsapp[i].itsMe === true){
        console.log(whatsapp[i])
    }}

for (i in whatsapp){   if (whatsapp[i].admin === true && whatsapp[i].itsMe === false){
        console.log(whatsapp[i])
    }
}
for (i in whatsapp){

    if (whatsapp[i].admin === false && whatsapp[i].itsMe === false){
         console.log(whatsapp[i])
    }
}
