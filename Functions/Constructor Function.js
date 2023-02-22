// Constructor Function 

function infoLivro(nome,editora){
    this.nome = nome 
    this.editora = editora
}
const livros={ sunTzu : new infoLivro('Sun-Tzu','Leitura'),
 oPrincipe : new infoLivro('O Principe','Intrínseca')}
 
for (livro in livros){
    console.log(livros[livro])
}


