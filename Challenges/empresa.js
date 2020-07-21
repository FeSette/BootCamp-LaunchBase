/* Crie um programa que armazena dados da empresa Rocketseat dentro de um 
objeto chamado empresa.*/

const Empresa = {
  nome: 'Rocketseat',
  Cor: 'Roxo',
  Foco: 'Programação',
  Endereço: {
      rua: 'Rua Guilherme Gembala',
      Numero: 260
  }    
}

// Imprima em tela utilizando console.log o nome da empresa e seu endereço

console.log (`A empresa ${Empresa.nome} está localizada em ${Empresa.Endereço.rua}, ${Empresa.Endereço.Numero}.`)