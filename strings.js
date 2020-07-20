
// String(texto) com aspas duplas:
const nome = "Felipe"
// String(texto) com aspas simples: 
const nome2 = 'Guilherme'  
/* Template String, onde podemos chamar uma outra variável dentro desta
 utilizando ${}. Exemplo: const nome3 = `Fabiana e ${nome}`, assim será 
 impresso, na variável nome3 (Fabiana e Felipe). */
const nome3 = `Fabiana e ${nome}`                                                        

// O comando typeof antes da variável, vai mostrar qual é o tipo da mesma.                                                  
console.log (typeof nome3)
console.log (nome3)   