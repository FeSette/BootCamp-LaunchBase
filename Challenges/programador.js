/* Crie um programa com um objeto para armazenar dados de um programador
Um programador pode trabalhar com várias tecnologias, por isso armazene essas 
tecnologias em um array. As tecnologias também devem ser objetos contendo nome 
e especialidade */

const Programador = {
  nome: 'Felipe',
  idade: 27,
  tecnologias: [
      {
          nome: 'C++',
          especialidade: 'Desktop'
      },
      {
          nome: 'JavaScript',
          especialidade: 'Web/Mobile'
      },
      {
          nome: 'Python',
          especialidade: 'Data Science'
      }
  ]
};

/* Imprima em tela o nome e especialidade da primeira tecnologia que o 
usuário utiliza */


console.log(`O usuário ${Programador.nome} tem ${Programador.idade} anos e usa a tecnologia ${Programador.tecnologias[0].nome} com especialidade em ${Programador.tecnologias[0].especialidade}.`);