// Expressões de manipulação de Strings

const mensagem = 'Bom dia, meu amigo' // Forma 1
const mensagem2 = new String('Isaquinho') // Forma 2
// Existem inúmeras outras formas de se criar string...

// Métodos com String

mensagem.length // Retorna o tamanho da string.

mensagem.indexOf('amigo') == 13
// Retorna o indice de determinada palavra na string.

mensagem.includes('amigo')==true 
// Declara se a palavra está ou não na string.

mensagem.startsWith('Bom') == true 
// Retorna se a mensagem começa com determinada palavra.

mensagem.endsWith('amigo') == true
// Retorna se a mensagem acaba com determinada palavra.

mensagem.replace('dia','almoço') // Altera termo na string

mensagem.trim() // Remove os espaços do início e fim

mensagem.split() // Divide a string de acordo com o paramêtro
// ex: mensagem.split(' ') == ['Bom', 'dia,', 'meu', 'amigo']

mensagem.slice() // retorna string de acordo com o indíce definido
// ex1:mensagem.slice(13)== 'amigo'
// ex2:mensagem.slice(0,7)== 'Bom dia'
