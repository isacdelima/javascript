// Recebendo dados input do usuário.

alert('Boa tarde!')
const aceitaPesquisa = confirm('Aceita responder a algumas perguntas?')

if (aceitaPesquisa == true){
   nome = prompt('Qual é seu nome?')
   idade = prompt('Qual é a sua idade')
}
 
 if (idade >= 18){
 alert (`Você é maior de idade, ${nome}!`)
}
else if (idade < 18){alert(`Você é menor de idade, ${nome}!`)}
else if(typeof idade !== "number"){
    (alert ('Idade inválida!'))}

  