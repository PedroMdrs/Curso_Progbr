// quando um objeto tem uma variavel ela eh chamada de propriedade.
// quando um objeto tem uma funcao ela eh chamada de metodo
function media (n1, n2) {
    // o this depende do contexto, e eh utilizado sempre no contexto de objetos. Nesse caso como o metodo(funcao) "media" vai pertencer ao objeto pedro e joao, o this vai se referir a eles.
    return (this.notas[0]  + this.notas[1]) / 2;
} 
var alunos = {
    joao: {
        notas: [2, 5],
        media
    },
    pedro: {
        notas: [2, 4],
        media
    }

}
console.log("a media de joao eh: " + alunos.joao.media());
console.log("a media de pedro eh: " + alunos.pedro.media());