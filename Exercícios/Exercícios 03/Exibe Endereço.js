// Criar objeto 'Endereço': com Rua,Cidade,CEP.
// Retornar esse objeto em uma função.

// Resolução 1
function inserirEndereço(cliente,rua,cidade,cep){
   return {cliente,
    rua ,
    cidade,
    cep}
}
const endereço = {
 isac : inserirEndereço('Isac','Salim Mahfoud','S.B.C','09820780'),
 pedro : inserirEndereço('Pedro','Orquídeas','S.B.C','0957250'),
 marcos : inserirEndereço('Marcos','Boston','New York','5464-2209-9')}

 for (end in endereço){
 
exibirEndereço(endereço);
function exibirEndereço(endereço){
console.log(`Nome: ${endereço[end].cliente}
Rua: ${endereço[end].rua}
Cidade: ${endereço[end].cidade}
CEP: ${endereço[end].cep} `)
}}

/* Resolução 2
function mostrarEndereço(endereço){
    for (chave in endereço)
    console.log(chave,endereço[chave])
}
mostrarEndereço(endereço)*/