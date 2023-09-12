// o metodo siblings pega todos os elementos no mesmo nivel

// let selected = $("#div3").siblings("#div4");
// console.log(selected)

// -------------------------------------------------------
// nextall retorna todos os elementos que estao declarados depois
//  o metodo next tras so o elemento que vem em seguida
// assim como existe o next que pega os elementos depois existe o metodo PREV
// let selected = $("#div3").nextAll();
// console.log(selected)
// let selected2 = $("#div3").next();
// console.log(selected2)
// let selected3 = $("#div3").prevAll();
// console.log(selected3)
// let selected4 = $("#div3").prev();
// console.log(selected4)



// nextuntil pega todos os elementos que tiverem sido declarado depois mas que sejam ate um que eh passado como argumento. Tambem tem o metodo equivalente pro "prev"
let selected5 = $("#div1").nextUntil("#div4");
console.log(selected5)

