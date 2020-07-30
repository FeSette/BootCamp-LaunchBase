/*==============================================================
                    OPERADORES DE COMPARAÇÃO
    
    >       Maior
    <       Menor
    >=      Maior igual a
    <=      Menor igual a
    ==      Igual a
    ===     Igual e do mesmo tipo
    !=      Diferente de
    !==     Diferente, inclusive do tipo

==============================================================*/

console.log ( 5 > 4 );         // TRUE
console.log ( 5 < 4 );         // FALSE
console.log ( 5 >= 4 );        // TRUE
console.log ( 4 <= 4 );        // FALSE
console.log ( 4 == "4" );      // TRUE
console.log ( 4 === "4" );     // FALSE
console.log ( 4 != "5" );      // TRUE
console.log ( 4 !== "5" );     // TRUE

const idade = 17;

if (idade >= 18) {
    console.log('Deixar entrar');
} else {
    console.log('Bloquear a entrada');
}
if (idade === 17) {
    console.log('Volte quando fizer 18 anos');
}