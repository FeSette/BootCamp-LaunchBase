// Criar um programa que calcule a média das turmas de alunos, e que mostre a média.

const AlunosTurmaA = [
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
]

const AlunosTurmaB = [
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
]

function CalculaMedia (Alunos) {
  return ( Alunos[0].nota + Alunos[1].nota + Alunos[2].nota ) / 3
}

const MediaA = CalculaMedia(AlunosTurmaA)
const MediaB = CalculaMedia(AlunosTurmaB)

// Se a média for maior que 5, parabenizar a turma

function EnviaMensagem(Media, Turma){
  if (Media > 5) {
      console.log (`A média da turma ${Turma} foi de ${Media}. Parabéns`)
  } else {
      console.log (`A média da turma ${Turma} foi de ${Media}, menor que 5. Precisamos melhorar!`)
  }
}

EnviaMensagem(MediaA, 'A')
EnviaMensagem(MediaB, 'B')