/* Crie um programa com um objeto para armazenar dados de um programador
Um programador pode trabalhar com várias tecnologias, por isso armazene essas 
tecnologias em um array. As tecnologias também devem ser objetos contendo nome 
e especialidade */

const Programador = {
  Nome: 'Felipe',
  Idade: 27,
  Tecnologias: [
      {
          nome: 'C++',
          Especialidade: 'Desktop'
      },
      {
          nome: 'JavaScript',
          Especialidade: 'Web/Mobile'
      },
      {
          nome: 'Python',
          Especialidade: 'Data Science'
      }
  ]
}

/* Imprima em tela o nome e especialidade da primeira tecnologia que o 
usuário utiliza */


console.log(`O usuário ${Programador.Nome} tem ${Programador.Idade} anos e usa a tecnologia ${Programador.Tecnologias[0].nome} com especialidade em ${Programador.Tecnologias[0].Especialidade}.`)