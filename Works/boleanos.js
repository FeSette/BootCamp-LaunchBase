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
  },
  {
    nome: 'Gabriel',
    nota: 6
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
  },
  {
    nome: 'Rose',
    nota: 7
  }
];

function calculaMedia(alunos) {
  let soma = 0
  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota
  }
  const media = soma / alunos.length;
  return media;
}

const mediaA = calculaMedia(alunosTurmaA);
const mediaB = calculaMedia(alunosTurmaB);

// Se a média for maior que 5, parabenizar a turma

function enviaMensagem(media, turma) {
  if (media > 5) {
    console.log(`A média da turma ${turma} foi de ${media}. Parabéns`);
  } else {
    console.log(`A média da turma ${turma} foi de ${media}, menor que 5. Precisamos melhorar!`);
  }
};

enviaMensagem(mediaA, 'A');
enviaMensagem(mediaB, 'B');

// Mostrar alunos como reprovados se a nota for menor que 5..

function marcarComoReprovado(aluno) {
  aluno.reprovado = false;
  if (aluno.nota < 5) {
    aluno.reprovado = true;
  }
};
marcarComoReprovado(alunosTurmaA);

function enviarMensagemReprovado(aluno) {
  if (aluno.reprovado) {
    console.log(`O Aluno ${aluno.nome} está reprovado!`);
  }
};

function alunoReprovado(alunos) {
  for (let aluno of alunos) {
    marcarComoReprovado(aluno);
    enviarMensagemReprovado(aluno);
  }
};

alunoReprovado(alunosTurmaA);
alunoReprovado(alunosTurmaB);
