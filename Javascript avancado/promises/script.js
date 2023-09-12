let usuarios = ["fsds", "dasdsa", "sada"];
// Promise eh uma maneira mais nova e melhor de se utilizar o callback, vem pra substituir o callback;
function imprimirUsuarios(){
    console.log(usuarios);
}
function inserirUsuario(x) {
    let promise = new Promise(function(resolve,reject){

        setTimeout(() => {
            usuarios.push(x);

            let error = true; /* "true" >> entao tem erro */
            console.log(!error) /* negacao de error = false*/

            if(!error){ /* essa porra eh false? */
                resolve();
            }else{
                reject({msg: "sdsdsdsaassa"})
            }
        }, 1000);
        
    })
    return promise;
}
inserirUsuario("pedro").then(imprimirUsuarios).catch((error) =>{
    console.log(error.msg)
})
