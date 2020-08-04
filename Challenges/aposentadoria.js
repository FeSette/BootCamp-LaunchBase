const nome = 'Silvana';
const sexo = 'F';
const idade = 60;
const contribuicao = 30;

/* O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 
30 anos. Utilizando a regra 85-95, a soma da idade com o tempo de contribuição 
do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no 
mínimo 85 anos na soma */

const calculo = idade + contribuicao;

// Essas variáveis irão retornar true ou false
const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculo >= 95;
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculo >= 85;

if ( homemPodeAposentar || mulherPodeAposentar ) {
    console.log (`${nome}, você pode se aposentar.`);
} else {
    console.log (`${nome}, você ainda não pode se aposentar.`);
}