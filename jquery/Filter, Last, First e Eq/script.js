// let selectec = $("#container1").children().filter(".div2")
// console.log(selectec)

// first pega so o primeiro elemento
// let selectec = $("#container1").children().last()
// console.log(selectec)


// o "Not" permite pegar todos os elementos que nao seja o passado como argumento

// let selected = $("#container2").children().not("[key = 8]")
// console.log(selected)


// o "eq" recebe um numero como argumento, esse numero representa o indice do array retornado


let selected = $("#container2").children().eq(8)
console.log(selected)