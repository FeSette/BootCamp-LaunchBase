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
  },
  {
    nome: 'Gabriel',
    nota: 6
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
  },
  {
    nome: 'Rose',
    nota: 7
  }
]

function CalculaMedia(Alunos) {
  let soma = 0
  for (let i = 0; i < Alunos.length; i++) {
    soma = soma + Alunos[i].nota
  }
  const Media = soma / Alunos.length
  return Media
}

const MediaA = CalculaMedia(AlunosTurmaA)
const MediaB = CalculaMedia(AlunosTurmaB)

// Se a média for maior que 5, parabenizar a turma

function EnviaMensagem(Media, Turma) {
  if (Media > 5) {
    console.log(`A média da turma ${Turma} foi de ${Media}. Parabéns`)
  } else {
    console.log(`A média da turma ${Turma} foi de ${Media}, menor que 5. Precisamos melhorar!`)
  }
}

EnviaMensagem(MediaA, 'A')
EnviaMensagem(MediaB, 'B')

// Mostrar alunos como reprovados se a nota for menor que 5.

function marcarComoReprovado(aluno) {
  aluno.reprovado = false
  if (aluno.nota < 5) {
    aluno.reprovado = true
  }
}
marcarComoReprovado(AlunosTurmaA)

function enviarMensagemReprovado(aluno) {
  if (aluno.reprovado) {
    console.log(`O Aluno ${aluno.nome} está reprovado!`)
  }
}

function alunoReprovado(alunos) {
  for (let aluno of alunos) {
    marcarComoReprovado(aluno)
    enviarMensagemReprovado(aluno)
  }
}

alunoReprovado(AlunosTurmaA)
alunoReprovado(AlunosTurmaB)