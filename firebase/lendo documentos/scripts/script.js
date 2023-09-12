// ler todos os dados de uma colecao
// db.collection('turmaA').get().then((snapshot) =>{
//     snapshot.forEach(doc => {
//         let aluno = doc.data();
//         console.log(aluno.nome)
//     });
// })


// ler apenas 1 dado de uma colecao

// let docRef = db.collection("turmaA").doc("6rdXPLitBbIu8DOAd2lr");
// docRef.get().then((doc) => {
//     let aluno = doc.data();
//     console.log(aluno.nome)
// })

//  o "GET" pega os documentos da colecao. Ele eh uma promise
db.collection('turmaA').get().then((snapshot) =>{
   snapshot.forEach(doc => {
        console.log(doc.data())
   });
    
} )