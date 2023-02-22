// Dia 07/01/2023

function Greeting (Horário){
    if (Horário >= '06:00' && Horário <'12:00')
    {return "Bom dia!"}
    else if (Horário >= '12:00' && Horário<'18:00') 
   {return "Boa tarde!"} 
    else {return "Boa noite!"}
}
console.log(Greeting("19:30"))

// Dia 16/01/2023

function preço (valor){
    if (valor >= 500 && valor <1000)
    {console.log ('Você ganhou 5% de desconto')}
    else if (valor >= 1000 && valor <5000)
        {console.log ('Você ganhou 10% de desconto')}
    else if (valor >=5000)
        {console.log('Você ganhou um desconto de 20%')}
    else {console.log ('Você não ganhou brindes!')}
}
preço('500')