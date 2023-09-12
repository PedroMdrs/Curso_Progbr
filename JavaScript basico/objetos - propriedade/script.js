// o objeto eh a relacao entre uma chave e um valor
// no objeto da pra criar uma chave pra acessar um elemento
// dentro do objeto as variaveis sao chamadas de propriedade
var aluno = {
    nome:"pedro",
    notas: [1,5,8],
}
// assim como o array tem outra maneira de criar um objeto

var gays = new Object({lgbt: "merda"});
gays.merecem = "rs"
console.log(gays);


// console.log(aluno["nome"]);
// console.log(aluno.nome)

// console.log(aluno["notas"][0]);
// console.log(aluno.notas[0])

// da pra adicionar propriedades em um objeto mesmo depois de criado
// ex:
aluno.matricula = 105010;
console.log(aluno)
// outras maneira de criar uma propriedade em um objeto depois de criado
aluno['sobrenome'] = "medeiros"

// se quiser mudar o nome da propriedade depois eh so mudar na variavel
var sexo = 'sexo';
aluno[sexo] = "masculino";


console.log(aluno)
