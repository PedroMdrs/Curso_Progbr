// let newUserEmail = "novoteste@teste.com"
// let newUserPassword = "123abc";
// // metodo que cria o usuario
// let auth = firebase.auth();
// auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword).then(user => {
//     console.log(user)
// }).catch(error => {
//     console.log(error)
// })

let user2Email ="sexo@sexo.com";

let user2Passwrod ="penisintenso";

firebase.auth().createUserWithEmailAndPassword(user2Email, user2Passwrod).then(user => {
    console.log(user)
})
