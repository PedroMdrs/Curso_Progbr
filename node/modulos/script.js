let calc = require("./calc")
let args = process.argv.slice(2)

function div(x, y) {
    return x / y
}
if(args[0] == 's'){
    console.log(calc.soma(Number(args[1]), Number(args[2])))
}else if (args[0] == 'm') {
    console.log(calc.multi(Number(args[1]), Number(args[2])))
}else if (args[0] == "d"){
    console.log(calc.div(Number(args[1]), Number(args[2])))
}else{
    console.log("erro fudeu")
}
