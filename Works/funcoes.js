// Criar um programa que calcule a média das turmas de alunos, e que mostre a média.

const alunosTurmaA = [
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

const alunosTurmaB = [
  {
      nome: 'Fabiana',
      nota: 2
  },
  {
      nome: 'Adriana',
      nota: 6
  },
  {
      nome: 'Juliana',
      nota: 2
  }
];

function calculaMedia (alunos) {
  return ( alunos[0].nota + alunos[1].nota + alunos[2].nota ) / 3;
}

const mediaA = calculaMedia(alunosTurmaA);
const mediaB = calculaMedia(alunosTurmaB);

// Se a média for maior que 5, parabenizar a turma

function enviaMensagem(media, turma){
  if (media > 5) {
      console.log (`A média da turma ${turma} foi de ${media}. Parabéns`);
  } else {
      console.log (`A média da turma ${turma} foi de ${media}, menor que 5. Precisamos melhorar!`);
  }
}

enviaMensagem(mediaA, 'A');
enviaMensagem(mediaB, 'B');