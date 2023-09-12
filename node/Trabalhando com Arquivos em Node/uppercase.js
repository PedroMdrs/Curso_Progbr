// CRAR/ATRIBRUIR o/ao ARQUIVO

// let fs = require('fs')
// fs.writeFile('teste.txt', function (error) {
//     if(error){
//         throw error;
//     }
//     console.log("arrquivo inserido com sucesso")
// })





// ------------------------------------------------------------------
// ADICIONAR ALGO NO ARQUIVO
// let fs = require('fs')
// fs.appendFile('teste.txt', "sexo sexo sem parar sexo sexo sem parar pratique sexo sexo sexo sexo sexo sexo", function (error) {
//     if(error){
//         throw error;
//     }
//     console.log("arquivo atualizado com sucesso")
// })

// ------------------------------------------------------------------
// APAGAR O ARQUIVO
// let fs = require('fs')
// fs.unlink('teste.txt', function (error) {
//     if(error){
//         throw error;
//     }
//     console.log("arquivo apaagdo com sucesso")
// })

// -------------------------------------------------------------------
// RENOMEAR O ARQUIVO 

// let fs = require('fs')
// fs.rename('tste.txt',"oi.txt", function (error) {
//     if(error){
//         throw error;
//     }
//     console.log("arquivo renomeado com sucesso")
// })
// -----------------------------------------------------------------
// LER O ARQUIVO

// let fs = require('fs')
// fs.readFile('oi.txt',"utf8",function (error, data) {
//     if(error){
//         throw error;
//     }
//     console.log(data)
// })
// ------------------------------------------------------------------

// let fs = require("fs");
// let args = process.argv.slice(2);

// let fileName = args[0];

// fs.readFile(fileName, "utf8", (erro,data) => {
//     if(erro) throw erro;
//     fs.writeFile(fileName + "_Uppercase", data.toUpperCase(), (erro) => {
//         if(erro) throw erro;
//         console.log("arqivo gerado com sucesso")
//     })
// })
// ----------------------------------------------------------------------------

let fs = require('fs');
let args = process.argv.slice(2)
let fileName = args[0];

fs.readFile("oi.txt", "utf8", (error,data)=>{
    if(error)throw error;
    fs.writeFile(fileName + "_uppercase", data.toUpperCase(), (error) => {
        if (error) throw error;
        console.log("arquivo gerado")
    })
})