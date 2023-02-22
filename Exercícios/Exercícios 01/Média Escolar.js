// Média escolar

// Obter a nota média a partir de um Array.

// 0:59 - F
// 60:69 - D
// 70:79 - C
// 80:89 - B
// 90:100 - A
const notas = [200,0,100]

console.log(médiaEscolar(notas));

function médiaEscolar(input){ 
let incremento = 0

  for (nota of input){
 if (typeof nota !== 'number' )
       {console.log('As notas inseridas são inválidas')}

    média = (incremento += nota)/notas.length}

 if (média > 100)
       {return 'Notas inválidas'}
 if (média <= 59)
       {return 'F'}
    else if (média >= 60 && média <= 69)
       {return'D'}
    else if (média >= 70 && média <= 79)
       {return'C'}
    else if (média >= 80 && média <= 89)
       {return 'B'}
    else if (média >= 90 && média <= 100)
       {return 'A'}
}