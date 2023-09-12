// datas sao objetos
// var d = new Date(2024,0,1);
// var d = new Date(1000 * 60 *60 * 24);
var d = new Date("2024/01/01");
var dias = ["Dom", "Sab", "Ter", "Qua" , "Qui", "Sex", "Sab"]
console.log(dias[d.getDay()]);