// var tem escopo global oq significa que eh acessivel em qualquer lugar, eh oq eh chamado de variavel global/.
// let eh uma variavel local, so existe dentro do bloco, se vc tentar dar console.log em uma let, e ela estiver dentro de um bloco n vai dar certo.
// mesmo uma variavel criada dentro de um bloco de uma funcao so existira ali dentro
{


    var numero1 = 4;
    let numero2 = 5;
    // contante nao pode ser reatribuida mas pode ser alterada
    const numero3 = true;


}
const aaa = 3;
console.log(aaa)
aaa += 3;
console.log(aaa)