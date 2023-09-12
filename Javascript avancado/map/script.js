// O map diferente do filter, nao filtra o array principal e cria um novo array, ele so cria um novo array que pode ser criado em cima dos elementos de um outro array 
function novoAluno(nome, idade) {
    return { nome, idade }
}
let alunos = [
    novoAluno("JOAO", 19),
    novoAluno("asdas", 56),
    novoAluno("zzzz", 35),
    novoAluno("hhh", 10),
    novoAluno("fffffff",33),
    novoAluno("blab", 19),
]
// function nomeIdade5(aluno){
//     return {
//         nome: aluno.nome,
//         idade: aluno.idade += 5}

// }
// console.log(alunos.map((nomeIdade5)))

//  DESAFIO MAP
// function idade(cb) {
//     cb()
//     console.log(newArray)
// }

// function frase() {
//     newArray = [];
//     for (let x of alunos) {
//         newArray.push(x.nome + " tem " + x.idade + " anos ");

//     }
// }
// idade(frase);


// EXERCICIO MEU MAP
// function bomRuim(alpha, name) {
//     return { alpha, name }
// }
// let champs = [
//     bomRuim(3, "yasuo"),
//     bomRuim(2, "zed"),
//     bomRuim(1, "katarina")
// ]
// function alphamedidor(x) {
//     if (x.alpha == 3) {
//         return {
//             alpha: x.alpha,
//             name: x.name,
//             conceito: "blabla"
//         }
//     } else if (x.alpha == 2) {
//         return {
//             alpha: x.alpha,
//             name: x.name,
//             conceito: "xxx"
//         }
//     }else{
//         return {
//             alpha: x.alpha,
//             name: x.name,
//             conceito: "syyyy"
//         }
//     }
// }
// console.log(champs.map(alphamedidor))


//  DESAFIO MAP 2
// function map2(cb) {
//     let newArray = [];
//     for(let x of this){
//         newArray.push(cb(x));
//     }
//     return newArray
   
// }

// function years5(x){
//     return {
//         nome: x.nome,
//         idade: x.idade += 10
//     }
// }
// alunos.map2 = map2
// console.log(alunos.map2(years5));