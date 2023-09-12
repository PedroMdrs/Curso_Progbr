// ler todos os dados de uma colecao
// db.collection('turmaA').get().then((snapshot) =>{
//     snapshot.forEach(doc => {
//         let aluno = doc.data();
//         console.log(aluno.nome)
//     });
// })

// ---------------------------------------------------------------------
const turmaA = "turmaA";
// O metodo onSnapshot faz com que o codigo fique procurando por alguma atualizacao nos dados do firebase, e se ha alguma modificacao ele executa a funcao que foi definida como argumento.

// db.collection(turmaA).onSnapshot(snapshot =>{
//     snapshot.forEach(doc => {
//         let aluno = doc.data()
//         console.log(aluno)
//     });
// })

// ----------------------------------------------------------------------
// pode fazer pra um documento especifico tb

let docRef = db.collection(turmaA).doc("alunobiruta")

docRef.onSnapshot(doc =>{
    let x = doc.data()
    console.log(x)
})
