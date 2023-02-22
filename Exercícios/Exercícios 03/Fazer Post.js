// Postagem de Blog

// Deve se criar um objeto com as seguintes propriedades:

// Título
// Mensagem
// Autor
// Visualizações
// Comentários - (Autor,Mensagem)
// Está ao vivo ou não.

function criarPostagem (titulo,mensagem,autor,visualizações,
    mensagemCom,autorCom,éOficial){
return {titulo,
    mensagem,
    autor,
    visualizações,
    comentario :[autorCom,mensagemCom],
    éOficial
 }}

const post1 = criarPostagem('Prêmio The Best anunciado','Isac Foi anunciado como o maior jogador da história ','Isac',
'5000',['Adorei!','pedro157'],true)

const post2 = criarPostagem('Primeiro Paredão BBB','Devem ir ao paredão : Gustavo e Key,Fred Nicácio e Marília além de Gabriel e Paula',
'Boninho','78000',['Espero que o cowboy fiquee','@Choquei'],true)

function retornaPost (postEscolhido){
    if (postEscolhido.éOficial == true)
    {postEscolhido.éOficial = 'Post Oficial ™️'}
    else {postEscolhido.éOficial = 'Post não oficial'}
    
    for (chave in postEscolhido.comentario){ 
        coment = (postEscolhido.comentario[chave])}

        return ` ${postEscolhido.titulo}!!

        ${postEscolhido.mensagem}  
    
Autor : ${postEscolhido.autor} 
    
                             ${postEscolhido.visualizações} Views
   
                            
         ${coment[0]}  --- ${coment[1]}   `
    }

    console.log(retornaPost(post2))

