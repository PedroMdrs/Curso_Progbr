
// function novoAluno(nome, idade){
//     return {nome,idade}
// }
// let alunos = [
//     novoAluno("isa", 19),
//     novoAluno("fodase", 56),
//     novoAluno("sadq", 35),
//     novoAluno("joaoviado", 10)
// ]
// function alunoDaqA5anos(aluno){ 
//     let novoAluno = aluno;
//     aluno.idade += 5;
//     return aluno;
// }
// console.log(alunos.map(alunoDaqA5anos));

// No JS quando se poe um objeto dentro do outro ele vai como "REFERENCIA", quer dizer que o aluno B eh uma referencia pro aluno A, entao tudo que eh modificado em B eh modificado em A

// let alunoA = {
//     nome:"das",
//     idade: 15,
// }
// let alunoB = alunoA;
// alunoB.idade = 25;


// Quando se atribui uma variavel a outra, mas essa variavel eh do tipo primitivo (numeros, strings, boolean), essa atribuicao eh feita por "VALOR"
// let idadeA = 15;
// let idadeB = idadeA;
// idadeB = 10;

// Arrays tambem tem atribuicao como referencia, assim como objetos.

// let turmaA = ["fodase", "das", "dqw"];
// let turmaB  = turmaA;
// turmaB.push("fodaseaeqw")
// console.log(turmaA);
// console.log(turmaB);

// uma das maneiras de separar isso eh usando o slice
// let turmaA = ["fodase", "das", "dqw"];
// let turmaB  = turmaA.slice();
// turmaB.push("fodaseaeqw")
// console.log(turmaA);
// console.log(turmaB);


// outra maneira
// let turmaA = ["fodase", "das", "dqw"];
// let turmaB  = [...turmaA];
// turmaB.push("fodaseaeqw")
// console.log(turmaA);
// console.log(turmaB);


// com objetos

// let alunoA = {
//     nome: "das",
//     idade: 14,
// }

// let alunoB = Object.assign({}, alunoA);
// alunoB.idade = 25;
// console.log(alunoA)
// console.log(alunoB)

// mais outra maneira de separar objetos

let alunoA = {
    nome: "das",
    idade: 14,
}

let alunoB = {...alunoA}
alunoB.idade = 25;
console.log(alunoA)
console.log(alunoB)
