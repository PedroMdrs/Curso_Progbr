
// arrow function nao entende oq eh o this
// o bind nao functiona pra ela
// o "this" pra arrow function eh o window
// se a arrow function tiver apenas 1 argumento pode escrever sem parenteses
// se oq a funcao fizer for apenas retornar um valor da pra escrever sem return
let dobro = x => x * 2;
let y = 3;
console.log(dobro(y))