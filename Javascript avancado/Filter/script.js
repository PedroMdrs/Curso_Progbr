// filter, map e reduce sao funcoes q todos os arrays tem 



function novoAluno(nome, idade) {
    return { nome, idade }
}
let alunos = [
    novoAluno("mario", 23),
    novoAluno("jose", 25),
    novoAluno("qw", 16),
    novoAluno("zxz", 51)
]
let gays = [
    novoAluno("carlos", 15),
    novoAluno("adas", 30),
    novoAluno("qweqq", 54),
    novoAluno("qeqweq", 15),

]


// existe uma maneira melhor pra filtrar que eh usando o filter
// filter recebe um callback, depois ela varre cada elemento e retorna true ou false
// se retornar true ele retorna um novo array com o elemento
// function menosde30(x) {
//     console.log(x)
//     return x.idade < 30;
// }
// let alunosunder30 = alunos.filter(menosde30)
// console.log(alunosunder30)
function under30(x){
    return x.idade < 30
}
function filtrar(x){
    let alunosFiltrados = []

    for( let y of this) {
        if(x(y)) {
            alunosFiltrados.push(y)
        }
    }
    return alunosFiltrados;
}

alunos.filtrar = filtrar;

console.log(alunos.filtrar(under30))