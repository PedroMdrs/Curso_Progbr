let auth = firebase.auth();

// function login() {
//     let userEmail = "novoteste@teste.com";
//     let userPassword = "123abc";

//     // metodo de persistencia do login, ele recebe um atributo
//     auth.setPersistence(firebase.auth.Auth.Persistence.NONE /* aqui tem 3 opcoes: LOCAL: persiste em qualquer janela que abrir.
//     SESSION: so funciona para aquela janela, se abrir em outra janela n vai ta logado.
//     NONE: se atualizar a pagina nao vai estar mais logado. */).then(() => {
//         auth.signInWithEmailAndPassword(userEmail, userPassword).then(loggedUser => {
//             console.log(auth.currentUser)
//         }).catch(error => {
//             console.log(error)
//         })
//     }).catch(erro => {
//         console.log(erro)
//     })
// }
// auth.onAuthStateChanged(user => {
//     if (user) {
//         console.log(user)
//     } else {
//         console.log('sem usuario')
//     }
// })
// function logOut() {
//     auth.signOut().then(user => {
//         console.log(user, "usuario deslogado")
//     })
// }
// setTimeout(LOG, 2000)


function logIn(){
    let userEmail = "novoteste@teste.com"
    let userPassword = "123abc"
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() =>{
    
    
        auth.signInWithEmailAndPassword(userEmail,userPassword).then((x) =>{
            console.log(auth.currentUser)
        }).catch(erro =>{
            console.log(erro)
        })
    
    }).catch(erro => {
        console.log(erro)
    })
    
}
auth.onAuthStateChanged(user =>{
    if(user){
        console.log(user)
    }else{
        console.log("nenhum usuario")
    }
})
function signOut(){
    auth.signOut().then(() =>{
        console.log("usuario deslogado")
    })
}
// setTimeout(logIn, 200);
