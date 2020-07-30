/* Criar um programa que calcule a média das notas entre os alunos, 
e que mostre a média.*/

const Aluno01 = {
  nome: 'Felipe',
  nota: 9.8
};
const Aluno02 = {
  nome: 'Guilherme',
  nota: 10
};
const Aluno03 = {
  nome: 'Henrique',
  nota: 2
};
const media = (Aluno01.nota + Aluno02.nota + Aluno03.nota) / 3;

// Se a média for maior que 5, parabenizar a turma
if (media > 5) {
  console.log(`A média foi de ${media}. Parabéns`);
} else {
  console.log(`A média foi de ${media}. Precisamos melhorar!`);
}