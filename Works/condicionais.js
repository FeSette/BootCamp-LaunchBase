//ESTRUTURA DE CONDIÇÔES

const aluno01 = 'Felipe'
const NotaAluno01 = 9.8

const aluno02 = 'Guilherme'
const NotaAluno02 = 3

const aluno03 = 'Fabiana'
const NotaAluno03 = 10

const media = ( NotaAluno01 + NotaAluno02 + NotaAluno03 ) / 3

// Se a média for maior que 5, parabenizar a turma

if (media > 5) { 
    // VERDADEIRO / TRUE
    console.log (`A média foi de ${media}. Parabéns`)                           
} else {
    // FALSO / FALSE
    console.log (`A média foi de ${media}. Precisamos melhorar!`)               
}

console.log( media > 5 )
console.log( media < 5 )