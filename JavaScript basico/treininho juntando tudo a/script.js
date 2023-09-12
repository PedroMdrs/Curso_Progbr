var nomes = ["pedro", "fodase" , "caralho"];
var nota1 = [5.0, 6.5, 10];
var nota2 = [8.0, 9.0, 2.0];

function media(n1,n2) {
    return (n1 + n2) / 2;
}

function passou(media) {
    if (media >= 7) {
        return "aprovado";
    } else {
        return "reprotavo"
    }
}

for (var index in nomes) {
    var nota_1 = nota1[index];
    var nota_2 = nota2[index];

    var m = media(nota_1, nota_2);
    
    console.log(nomes[index] + " - " + nota_1 + " - " + nota_2 + " - " + " media de " + m + " - " + passou(m))
}