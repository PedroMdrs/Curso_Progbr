// $(" #lista1 >.item2").hide();
// -----------------------------------------------------------------------

let lista1 = $('#lista1');
// // O Jquery tem um metodo chamado find que permite achar descendentes de um elemento ja selecionado
// o find vai mais profundamente na estrutura dos elementos, podendo pegar o filho do filho

// lista1.find(".item2").hide()

// ---------------------------------------------------------------------------------
// O metodo children da acesso a todos os filhos do elemento
// console.log(lista1.children().fadeOut())

// -----------------------------------------------------------------------------


let body = $('body');
console.log(body.find('.item2'))