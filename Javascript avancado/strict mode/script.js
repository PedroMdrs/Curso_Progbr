// "var x = 3" e "x = 3" eh a mesma coisa. 
// no javascript se voce escreve sem nada, ele automaticamente vai declarar o VAR pra voce;

// var x = 3;
// x = 3
// console.log(x)

// Quando o VAR eh criado dentro da funcao, o JavaScript nao cria a propriedade dentro do objeto window.
// Quando se cria a variavel dentro da funcao, ela faz parte do escopo local, quando nao cria a variavel e coloca o x, o javascript procura fora do escopo se existe alguma outra variavel declarada de forma global fora do escopo local la em cima, se nao tiver ele cria de forma global.

// obriga vc a declarar a variavel
"use strict";



function imprimir() {
    x = 7
    console.log(x)
    // var y = 7
    // console.log(y)
    
}
imprimir();
console.log(x)
