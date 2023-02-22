// Encontrar elementos em um Array (Tipos Primitivos)

const array = ['Isac','Marcos','Rose','Luiza','Isac']

array.includes('Isac') // Retorna se o elemento existe no Arr

array.indexOf('Rose') // Retorna o Indíce do elemento,
// caso não exista retorna '-1'

array.lastIndexOf('Isac') // no caso do termo aparecer mais de uma vez,
// retorna o indíce da última vez q aparece.


// Encontrar elementos em um Array (Tipos de Referência)

// Exemplo 1

const tenis = [{
    empresa:'Nike',nome:'Air Max'},{
    empresa:'Adidas',nome:'Classic'},{
    empresa:'Puma',nome:'Suede Classic'},
    {empresa:'Adidas',nome:'Advantage Base'}
]

const marca = tenis.find(function(marca){
   return   marca.empresa === 'Adidas'  
}
)
console.log(marca)



// Exemplo 2

const carro = [{
    modelo:'Sedã',cor:'Vermelho'},{
    modelo:'SUV',cor:'Preto'},{
    modelo:'Picape',cor:'Vermelho'},{
    modelo:'Conversível',cor:'Branco'},{
    modelo:'Picape',cor:'Preto'
    }]

const mostraCarro = carro.find((carro) => carro.modelo === 'SUV')
console.log(mostraCarro)
