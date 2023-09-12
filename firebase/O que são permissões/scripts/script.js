function ler() {
    
    db.collection("turmaA").get().then(snapshot =>{
        snapshot.forEach(item =>{
            console.log(item.data())
        })
    }).catch(erro => {
        console.log(erro)
    })
}
ler();