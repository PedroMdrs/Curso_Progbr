var nota1 = 9.0;
var nota2 = 7.0;
conceito = "";
var media = (nota1 + nota2) / 2;

if (media >= 8) {
    conceito = "otimo";
} else if (media > 6) {
    conceito = "regular";
} else {
    conceito = "horrivel";
}
console.log(media);
console.log(conceito);
switch (conceito) {
    case "otimo":
        console.log("boa cabacao vc decorou bem")
        break
    case "regular":
        console.log("mediocre")
        break
    case "horrivel":
        console.log("podre")
        break
    default:
        console.log("houve algum erro")
}

// var a = 3;
// var b = 2;
// var c = a + b;
// switch(c) {
//     case 8: c = 20; console.log(c)
//     break
//     default: console.log("napo")
// }