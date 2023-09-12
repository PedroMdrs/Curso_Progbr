// ler todos os dados de uma colecao
// db.collection('turmaA').get().then((snapshot) =>{
//     snapshot.forEach(doc => {
//         let aluno = doc.data();
//         console.log(aluno.nome)
//     });
// })

// ---------------------------------------------------------------------
const turmaA = "turmaA";
// // o metodo add vai receber um objeto e vai retornar uma promise

// db.collection(turmaA).add({
//    nome: "marcos",
//    sobrenome: "sasta",
//    notas:{
//       nota1: 9.6,
//       nota2: 7.6
//    },

// }).then(doc => {
//    console.log("documento inserido", doc).catch(erro =>{
//       console.log("houve um erro")
//    })
// })

// ---------------------------------------------------------------------
// caso queira escrever um id proprio:

// doc recebe o id
// set recebe um objeto
// set serve tanto pra adicionar um elemento ou modificar um que ja existe
// o "set" sobrescreve os dados existentes, entao se vc botar 1 dado so e tive outros dados antes que vc nao reescreveu ele vai apagar


// db.collection(turmaA).doc("MQ2w4PKU2pMPYEgeYzCR").set({
//    nome: "pitnm",
//    sobrenome: "olveira",
//    notas: {
//       nota1: 1.0,
//       nota2: 7.0
//    },
// }).then(doc => {
//       console.log("documento inserido").catch(erro =>{
//          console.log("houve um erro")
//       })
//    })

// ---------------------------------------------------------------------
// Pra nao apagar os outros elementos, pode-se passar outro argumento pra funcao set que impede isso

// db.collection(turmaA).doc("MQ2w4PKU2pMPYEgeYzCR").set({

//    sobrenome: "eth",

// }, {
//    merge: true 
// }
// ).then(doc => {
//    console.log("documento inserido").catch(erro => {
//       console.log("houve um erro")
//    })
// })

//-----------------------------------------------------------------------
// Para evitar dor de cabeca em vez de usar o "set" da pra usar o "update"
// db.collection(turmaA).doc("MQ2w4PKU2pMPYEgeYzCR").update({

//    "notas.nota1": 10,
//    // da pra criar novas propriedades tb
//    faltas: 5,

//    cidades: firebase.firestore.FieldValue.arrayUnion("sc", "oi"),
//    cidades: firebase.firestore.FieldValue.arrayRemove("oi"),
//    faltas: firebase.firestore.FieldValue.increment(1),


// },).then(doc => {
//    console.log("documento inserido").catch(erro => {
//       console.log("houve um erro")
//    })
// })

// ----------------------------------------------------------------------

// db.collection(turmaA).add({
//    nome:"Teste",
//    sobrenome: "foase",
//    notas: {nota1: 7, nota2: 3},

// })

// ----------------------------------------------------------------------

// db.collection(turmaA).doc("alunobiruta").set({
//    nome: "HAHAHAHAHAAH",
//    sobrenome: "HAHAHAHAHAHA",
//    notas: {nota1: 4, nota2: 4},
// })
// ----------------------------------------------------------------------

// db.collection(turmaA).doc("alunobiruta").set({
//    estado: "sigma"
// }, {
//    merge: true
// }).then(doc => {
//    console.log("documento inserido").catch(erro => {
//       console.log("houve um erro")
//    })
// })

// ---------------------------------------------------------------------

// db.collection(turmaA).doc("alunobiruta").update({
//    // cidades: ["sc", "sp"]
//    cidades: firebase.firestore.FieldValue.arrayUnion("sexo"),

//    // vaginas: 0
//    vaginas: firebase.firestore.FieldValue.increment(4)
// })