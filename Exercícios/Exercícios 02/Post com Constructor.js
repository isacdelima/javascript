// Postagem de Blog em Constructor Function

// Dev se usar a mesma lógica do último projeto,
// porém utilizando constructor function.

function criarPostagem (titulo,mensagem,autor,visualizações,
    mensagemCom,autorCom,éOficial){
 {this.titulo = titulo
    this.mensagem = mensagem
    this.autor = autor
    this.visualizações = visualizações
    this.mensagemCom = mensagemCom
    this.autorCom = autorCom
    this.éOficial = éOficial
 }}

const post1  = new criarPostagem('Prêmio The Best anunciado','Isac Foi anunciado como o maior jogador da história ','Isac',
'5000','Adorei!','pedro157',true)

const post2 = new criarPostagem('Primeiro Paredão BBB','Devem ir ao paredão : Gustavo e Key,Fred Nicácio e Marília além de Gabriel e Paula',
'Boninho','78000','Espero que o cowboy fique !','@Choquei',true)


function retornaPost (postEscolhido){
    if (postEscolhido.éOficial == true)
    {oficial = 'Post Oficial ™️'}
    else {oficial = 'Post não oficial'}

        return ` ${postEscolhido.titulo}!!

        ${postEscolhido.mensagem}  
    
Autor : ${postEscolhido.autor} 
    
                             ${postEscolhido.visualizações} Views
   
                            
         ${postEscolhido.autorCom} - ${postEscolhido.mensagemCom}  
         
         ${oficial}`
    }
    console.log(retornaPost(post2))