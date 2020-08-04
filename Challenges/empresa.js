/* Crie um programa que armazena dados da empresa Rocketseat dentro de um 
objeto chamado empresa.*/

const Empresa = {
  nome: 'Rocketseat',
  cor: 'Roxo',
  foco: 'Programação',
  endereço: {
      rua: 'Rua Guilherme Gembala',
      numero: 260
  }    
};

// Imprima em tela utilizando console.log o nome da empresa e seu endereço

console.log (`A empresa ${Empresa.nome} está localizada em ${Empresa.endereço.rua}, ${Empresa.endereço.numero}.`);