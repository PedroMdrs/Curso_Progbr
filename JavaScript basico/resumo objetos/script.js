function obj(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
        
}

var a = new obj("pedro", "med");
var b = new obj("pedro", "med");

var c = new obj("pedro", "med");

var d = new obj("pedro", "med");


console.log(a.nome);
console.log(b.sobrenome);
console.log(c["sobrenome"]);
console.log(d);