let idade = parseInt(prompt("insira sua idade"));

function checkAge(age) {
    if(age * 0  == 0){
        age >= 18? alert("pode beber otario estrague seu figado a vontade") : alert("nao pode beber (sortudo)")
    } else{
        alert("valor invalido");
        idade = parseInt(prompt("insira sua idade"));
        checkAge(idade);
    }

}
checkAge(idade);
