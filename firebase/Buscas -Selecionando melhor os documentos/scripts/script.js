
// pega todos os documentos onde o nome do aluno seja pedro
// da pra usar mais de um where se o campo for o mesmo
// por exemplo se um dos campos do where fosse "sobrenome" por exemplo em vez de "nome" nao daria certo

// ---------------------------------------------------------------------
// db.collection('turmaA').where("nome", ">", "o")
//                         .where("nome", "<", "x").get().then(snapshot => {
//       snapshot.forEach(doc => {
//          let aluno = doc.data()
//          console.log(aluno.nome, aluno.sobrenome)
//       });
//    })

// ----------------------------------------------------------------------

// db.collection("turmaA").where("nome", ">", "k").where("nome", "<", "x").get().then(snapshot => {
//    snapshot.forEach(doc => {
//       let aluno = doc.data()
//       console.log(aluno.nome)
//    });
// })