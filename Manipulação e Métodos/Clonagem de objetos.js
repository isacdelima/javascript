// Clonagem de  Objetos 

function cidade (nome,habitantes,fundação,) {
   return  {nome,
    habitantes,
    fundação}
}
const sbc = cidade('SBC',8458,1553)
// Método 1

const novaCidade = Object.assign(
     {},sbc)
    console.log(novaCidade)

// Método 2

const newCity = {...sbc}
console.log(newCity)