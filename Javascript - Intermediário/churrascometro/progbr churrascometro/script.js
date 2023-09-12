// carne - 400 gr por pessoa + de 6 horas - 650
// cerveja - 1200 ml por pessoa + 6 horas - 2000ml
// refrigerante/agua - 1000 ml por pessoa + 6 horas = 1500 ml
// criancas valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidaPP(duracao)  * adultos +  (bebidaPP(duracao) / 2) * criancas;

    resultado.innerHTML = `<p>${Math.ceil( qtdTotalCarne/1000)} Kg de carne </p>`
    resultado.innerHTML += `<p>${Math.ceil( qtdTotalCerveja/355)} Latas  de cerveja </p>`
    resultado.innerHTML += `<p>${ Math.ceil( qtdTotalBebidas/2000)} Garrafas de bebida </p>`
}
function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;

    }
}
function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;

    }
}
function bebidaPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;

    }
}