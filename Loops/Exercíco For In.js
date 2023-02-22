// Imprimir propriedades do tipo string

// Criar um método para ler propriedades de um objeto
// Exibir somente as propriedades do tipo 'String'

const venda ={
vendedor : 'Magazine Luiza',
cliente : 'Tonico',
idade : 12
}
for (chave in venda){
    if(typeof venda[chave] == 'string')
{console.log(chave+' : '+venda[chave])}    
}