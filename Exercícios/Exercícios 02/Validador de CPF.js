// Dia 07/01/2023

const cpf = 56921465845
const primeirocalculo = (cpf[0]*10)+(cpf[1]*9)+(cpf[2]*8)+(cpf[3]*7)+(cpf[4]*6)+(cpf[5]*5)+(cpf[6]*4)+(cpf[7]*3)+(cpf[8]*2)*10%11
const segundocalculo = ((cpf[0]*11)+(cpf[1]*10)+(cpf[2]*9)+(cpf[3]*8)+(cpf[4]*7)+(cpf[5]*6)+(cpf[6]*5)+(cpf[7]*4)+(cpf[8]*3)+(cpf[9]*2))*10%11
switch (validar)
{case (primeirocalculo != cpf[9])
:return console.log ('Cpf inválido')
}
