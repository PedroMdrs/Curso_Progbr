// nome do aluno - nota1 - nota2 - media - aprovado
let StudentData = [
    {
        nome: "Pedro",
        notas: [10,10]
    },
    {
        nome: "lorruama",
        notas: [6,6],  
    },
    {
        nome: "caguei",
        notas: [3,8],
    },
    {
        nome: "oiii",
        notas: [2,10],
    },
]
let media = (n1, n2) => {
    return (n1 + n2) / 2;
}
function printData() {
    for (x of StudentData) {
        let result = media(x.notas[0], x.notas[1]);
        if(result >= 8 ){
            console.log(x.nome + ':' + " primeira nota - " + x.notas[0] + "," + " segunda nota - " + x.notas[1] + "," + " media - " + result + ". Parabens voce foi otimo");
        }else if(result >= 6){
            console.log(x.nome + ':' + " primeira nota - " + x.notas[0] + "," + " segunda nota - " + x.notas[1] + "," + " media - " + result + ". Parabens voce eh mediocre");
        }else{
            console.log(x.nome + ':' + " primeira nota - " + x.notas[0] + "," + " segunda nota - " + x.notas[1] + "," + " media - " + result + ". Parabens voce foi horrivel");
        }     
    }
}
printData();