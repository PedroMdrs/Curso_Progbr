let auth = firebase.auth();
// function criarUsuario() {
//     let newUserEmail = "novoteste@teste.com"
//     let newUserPassword = "123abc";
//     // metodo que cria o usuario
//     auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword).then(user => {
//         console.log(user)
//     }).catch(error => {
//         console.log(error)
//     })
// }

// function login() {
//     let userEmail = "novoteste@teste.com";
//     let userPassword = "123abc";

//     auth.signInWithEmailAndPassword(userEmail, userPassword).then(loggedUser => {
//         console.log(auth.currentUser)
//     }).catch(error => {
//         console.log(error)
//     })
//     let user = auth.currentuser;

//     console.log(user)

// }
// // login()


// auth.onAuthStateChanged(user => {
//     if(user){
//         console.log(user)
//     }else{
//         console.log("ngm logado")
//     }
// })
// function logout() {
//     auth.signOut().then(() => {
//         console.log("usuaroi foi deslogado")
//     }).catch(erro =>{
//         console.log(erro)
//     })
// }
// setTimeout(logout, 2000);

// function login() {
//     let userEmail = "novoteste@teste.com";
//     let userPassword = "123abc";

//     auth.signInWithEmailAndPassword(userEmail,userPassword).then(user => {
//         console.log(user, "usuario logado")
//     })
// }
// auth.onAuthStateChanged(user => {
//     if(user){
//         console.log(user)
//     }else{
//         console.log('sem usuario')
//     }
// })
// function logOut() {
//     auth.signOut().then(user => {
//         console.log(user, "usuario deslogado")
//     })
// }
// setTimeout(logOut, 2000)
