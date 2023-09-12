let usuarios = ["fsds", "dasdsa", "sada"];

function inserirUsuario(nome) {

    let promise = new Promise(function (resolve, reject) {

        setTimeout(() => {
            usuarios.push(nome);

            let error = false;

            if (!error) {
                resolve();
            }
            else {
                reject({ msg: "erro deda" });
            }

        }, 1000);
    })
    return promise;
}
function listarUsuarios(){
    console.log(usuarios)
}
async function executar() {
    await inserirUsuario("Ahjhg");
    listarUsuarios();

}
executar().catch((error) =>{
    console.log(error.msg);
})
