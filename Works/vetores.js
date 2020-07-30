/* Criar um programa que calcule a média das notas entre os alunos, 
e que mostre a média.*/

const Alunos = [
  {
      nome: 'Felipe',
      nota: 9.8
  },
  {
      nome: 'Guilherme',
      nota: 10
  },
  {
      nome: 'Henrique',
      nota: 2
  }
];

const media = ( Alunos[0].nota + Alunos[1].nota + Alunos[2].nota ) / 3;

// Se a média for maior que 5, parabenizar a turma

if (media > 5) {
  console.log (`A média foi de ${media}. Parabéns`);
} else {
  console.log (`A média foi de ${media}. Precisamos melhorar!`);
}