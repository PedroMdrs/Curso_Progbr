var aluno = {
    matricula: 1234,
    nome: "marcos",
    telefone: 123,
    cidade: "dasda"
}

// Caso vc nao queira copiar o objeto inteiro da pra fazer isso:

// var {matricula, nome} = aluno; /* pega a propriedade matricula e a propriedade nome e guarda dentro de uma variavel matricula e outra variavel nome */
// console.log(matricula, nome) 

// --------------------------------------------------
// Outro exemplo so que pegando todo o objeto

// var{...copia} = aluno;
// copia.matricula = 86546154 
// console.log(copia)

// ---------------------------------------------------
// Pega o nome guarda dentro de uma variavel nome, depois pega todo o objeto aluno e guarda dentro de uma variavel copia so que sem o nome, pq ele foi escrito antes, entao eh como se o nome fosse separado 

// var{nome, ...copia} = aluno;
// copia.matricula = 86546154 
// console.log(copia)
// console.log(nome)

// ------------------------------------------------------------
// Outro exemplo

// const {matricula, nome, ...resto} = aluno;
// console.log(resto)
// console.log(matricula);
// console.log(nome)

// -------------------------------------------------------------------
// Com Array tambem funciona, a diferenca eh que no OBJETO o que identifica um dado eh a sua PROPRIEDADE, ja no ARRAY eh a POSICAO

// var aluno1 = {
//     matricula: 42112,
//     nome: "qwe",
//     telefone:5251233,
//     cidade:"zxczxc"
// }

// var alunos = [aluno,aluno1]; /* posicao 1 do array = objeto aluno, posicao 2 do array = objeto aluno1 */
// var [marcos, joao] = alunos; /* Cria uma variavel marcos e guarda o objeto "aluno" nela, porque ele ta na primeira posicao do array alunos. Depois cria uma variavel joao e guarda o objeto " aluno1 "  dentro dela porque "joao" ta na posicao 2 igual ao aluno1 no array alunos */
// console.log(marcos)

// ----------------------------------------------------------------------
// outro exemplo

var aluno1 = {
    matricula: 42112,
    nome: "qwe",
    telefone: 5251233,
    cidade: "zxczxc"
}
var aluno2 = {
    matricula: 878787878787878787878,
    nome: "zzzzzzz",
    telefone: 1,
    cidade: "penis"
}

var alunos = [aluno, aluno1, aluno2];
var [marcos, ...outros] = alunos;
console.log(marcos);
console.log(outros);
