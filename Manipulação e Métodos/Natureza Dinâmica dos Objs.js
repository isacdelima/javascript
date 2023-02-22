// Natureza dinâmica dos objetos

/* No JS, os objeto são dinâmicos,ou seja,
 suas propriedades podem ser alteradas,deletadas e também
 é possível criar novas propredades ao longo do scope*/

const localidade = {
    nome: '',
    país : 'Brasil',
    estado : 'DF',
    cidade : 'Brasília'}

function localPretendidos (paispretend,estadopretend,cidadePretend)
{return{paispretend,
estadopretend,
cidadePretend}}

const pessoas = { isac : localPretendidos('Brasil','Sp','São Paulo'),
 alex : localPretendidos('Brasil','PE','Serra Talhada'),
cindy : localPretendidos('EUA','NY','New York'),
ricardo : localPretendidos('Itália','Milão','Lombardia')}

for (pessoa in pessoas){
        alteralocal(pessoas[pessoa]);
    function alteralocal (obj){
        {localidade.nome = pessoa
        localidade.país = obj.paispretend
        localidade.estado = obj.estadopretend
        localidade.cidade = obj.cidadePretend}}

    console.log(localidade)}


