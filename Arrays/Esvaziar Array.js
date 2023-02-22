
const livros = ['Sun-Tzu','Manifesto comunista','O príncipe']

// Método 1 - (Não funciona se o array foi declarado como const.)

//livros = []

//////////////////////////////////////////////////////////////////


// Método 2 - (Mais limpo e recomendado)

//livros.length = 0

//////////////////////////////////////////////////////////////////


// Método 3 - Usando Splice (Funciona porém o código fica + sujo)

//livros.splice(0,livros.length)

//////////////////////////////////////////////////////////////////


// Método 4 - Usando Pop (Se tiver muitos elementos consome mais tempo e processamento)

//while(livros.length >0){
  //  livros.pop()}
