/* function createProfile(name, grade1, grade2) {
    return {
        nome: name,
        firstGrade: grade1,
        secondGrade: grade2,
        media: function () {
            return (this.firstGrade + this.secondGrade) / 2;
        }
    }
}
let turma = [
    createProfile("pedro", 10, 10),
    createProfile("x", 2, 10),
    createProfile("carlos", 5, 9),
    createProfile("fodase", 5, 6),
    createProfile("sada", 3, 1.5),
    createProfile("qqq", 2, 7),
    createProfile("vvvv", 1, 2.3),
]
// quase tudo no java script eh um objeto
// o array no seu core tambem, em vez de usar o "for" da pra usar o metodo "forEach"
turma.forEach((x) => {
    console.log(x.nome + ":" + " Primeira nota - " + x.firstGrade + "," + " segunda nota - " + x.secondGrade + "," + " media - " + x.media());
}) */

// CONSTRUTOR DE UM OBJETO
function aluno(nome,nota1,nota2){
    this.name = nome;
    this.grade1 = nota1;
    this.grade2 = nota2;
    this.media = () => {
        return (this.grade1+ this.grade2) / 2
    }   
}
let x = new aluno("pedro", 9, 10);
console.log(x.name + " - " + " media: " + x.media() );