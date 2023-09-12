// Spread Operator sao os tres pontinhos ( ...x) pra fazer a copia de um array e objeto da ultima aula.


// var pessoa = {
//     name: "fodase", idade: 23,
// }

// var contato = {
//     telefone: 111111,
//     email: "dasdas"
// }
// var copia = {...pessoa}
// copia.idade = 88;
// console.log(pessoa)
// console.log(copia)

// ----------------------------------------------------------------------

// Com o Spread Operator eh possivel  juntar dois objetos em 1 
// 
// var pessoa = {
//     name: "fodase", idade: 23,
// }

// var contato = {
//     telefone: 111111,
//     email: "dasdas"
// }
// var copia = {...pessoa, ...contato}
// copia.idade = 88;
// console.log(pessoa)
// console.log(copia)

//-----------------------------------------------------------------------

// Para arrays tambem funciona

var notas_turma1 = [10, 8, 1, 5];
var notas_turma2 = [1, 6, 5, 7];
var todas_notas = [...notas_turma1, ...notas_turma2];
console.log(todas_notas)
