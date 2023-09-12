// carne - 400 gr por pessoa + de 6 horas - 650
// cerveja - 1200 ml por pessoa + 6 horas - 2000ml
// refrigerante/agua - 1000 ml por pessoa + 6 horas = 1500 ml
// criancas valem por 0,5

let adultos = document.getElementById("adultos")
let criancas = document.getElementById("criancas")
let duracao = document.getElementById("duracao")
let resultado = document.getElementById("resultado")



function calc() {
    console.log(adultos.value, criancas.value, duracao.value )
    if (duracao.value >= 6) {
        var carne = adultos.value * 650 + (650 / 2) * criancas.value
        var cerveja = adultos.value * 2000;
        var bebidas = adultos.value * 1500 + (1500 / 2) * criancas.value;
       
    } else {
        var carne = adultos.value * 400 + (400 / 2) * criancas.value
        var cerveja = adultos.value * 1200;
        var bebidas = adultos.value * 1000 + (1000 / 2) * criancas.value;
        
    }
    resultado.innerHTML = `<h2> Você vai precisar de: </h2> `
    resultado.innerHTML += `<p> ${carne / 1000} KG de Carne </p> `
    resultado.innerHTML += `<p> ${Math.ceil(cerveja / 355)} Latas de Cerveja  </p>`
    resultado.innerHTML += `<p> ${Math.ceil(bebidas / 2000)} Garrafas Pet de Refrigerante </p> `

}