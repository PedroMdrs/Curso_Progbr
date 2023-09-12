function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno("X", 19),
    novoAluno("Y", 20),
    novoAluno("Z", 31),
    novoAluno("U", 20),

]
// Para o reduce funcionar tera que ter uma funcao que vai pegar todo o array e transformar em uma unica variavel
// o REDUCE reduz todas as entradas de um array em uma unica entrada
// function idadeDaTurma(x, y) {
//     console.log(x);
//     console.log(y)
//     return x + y.idade
// }
// console.log(alunos.reduce((idadeDaTurma), 0))

// DESAFIO REDUCE

// let total = 0;
// function soma(cb) {
//     cb();
//     console.log(total);
// }

// function reduce2() {
//     for (let x of alunos){
//         total += x.idade;
//     }
// }
// soma(reduce2);

// DESAFIO REDUCE 2
function reduce3(cb,s){
    for (let x of this) {
        s += cb(x)
    }
    return s
    
}
function somaIdade(x){
    return x.idade
}
alunos.reduce3 = reduce3;
console.log(alunos.reduce3(somaIdade,0))