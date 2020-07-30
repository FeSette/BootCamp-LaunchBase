/*==============================================================
                    OPERADORES DE LÓGICOS
    
    &&      "E" As duas condições devem ser verdadeiras
            para que a condição final seja verdadeira.
    ||      "OU" Uma das condições deve ser verdadeira
            para que a condição final seja verdadeira.
    !       "NÃO" Nega um condição.

==============================================================*/

console.log ( 5 == 5 && 6 == 6 );        // TRUE
console.log ( 5 == 5 && 6 != 6 );        // FALSE
console.log ( 5 == 5 || 6 == 6 );        // TRUE
console.log ( 5 == 5 || 6 == 6 );        // TRUE
console.log (!(5 > 6 ));                 // TRUE
console.log (!(5 < 6 ));                 // FALSE


const idade = 16;

if (!( idade >= 18 ) || idade === 17 ) {
    console.log('Bloquear a entrada');  
} else {
    console.log('Deixar entrar');
}