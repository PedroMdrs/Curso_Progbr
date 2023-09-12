// function ola() {
//     console.log('Ola')
// }
// function tchau(){
//     console.log("tchau")
// }
// function saudacao(valor, nome){
//     valor(); /* callback */
//     console.log(nome)
// }
// saudacao(tchau, "pedo")


// call serve pra executar algo assincrono 
let usuarios = ["fodase", "fodasqw", 'Caguei', "lixo,"];

function inserirUsuario(nome,cb){
   setTimeout(() => {
     usuarios.push(nome);
     cb();
   }, 2000);
}
function listarUsuario(){
    console.log(usuarios)
}
inserirUsuario("igor", listarUsuario);
