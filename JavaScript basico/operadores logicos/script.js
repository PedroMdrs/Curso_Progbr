//  && e >>> compara dois valores booleanos se ambos forem verdadeiros ele retorna verdadeiro, qualquer coisa diferente disso ele retorna falso.
//  || ou >>> se um dos dois for verdadeiro ele retorna verdadeiro
// negativo ( ! ) > so pode ser aplicao em bagulho do tipo booleano, e sempre que a gente negar um valor verdadeiro ele passa a ser falso e contrario eh verdade


var idade = 10;

var menor10 = idade <= 10;

var maior65 = !menor10;

console.log("menor q 10", menor10);
console.log("maior q 65", maior65);
console.log(!false);
