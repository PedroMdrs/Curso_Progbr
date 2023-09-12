let auth = firebase.auth()
function ler() {

    db.collection("turmaA").get().then(snapshot => {
        snapshot.forEach(item => {
            console.log(item.data())
        })
    }).catch(erro => {
        console.log(erro)
    })
}

function escrever() {

    db.collection("turmaA").add({ title: "novo obj", numero: Math.random() }).then(doc => {
        console.log(doc)
    }).catch(erro => {
        console.log(erro)

    })
}
function login() {

    let userEmail = "sexo1234@sexo.com"
    let userPassword = "123abc"
    auth.signInWithEmailAndPassword(userEmail, userPassword).then(user => {
        auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(loggedUser => {
            console.log(loggedUser)
            escrever();
        }).catch((erro) => {
            console.log(erro)
        }).catch((erro) => {
            console.log(erro)
        })
    })
}
login()
