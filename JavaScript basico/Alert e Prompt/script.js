let input;

function alerta() {
    input = parseInt(prompt("digite um numero pra multiplicar por 9"));
    if (input * 0 == 0){
        x = input * 9;
        alert(input + " * 9 é " + x);
    }else{
        alert("valor invalido");
    }
}
alerta();

