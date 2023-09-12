// Assim como a requisicao a resposta tem  partes
// Status, body e header
// O status contem a versao http, o codigo do status e a mensagem de retorno do staus
// codigo 100 eh informativo, codigo 200 eh sucesso, a classe 300 eh quando o endereco ta errado, 400 eh quando o servidor consege fzr oq vc pediu masn conseguiu trazer o dado, talvez pq vc n tnha permissao por exemplo, 500 deu algum bug no sistema do servidor
const express = require('express');
const app = express();

app.get("/", (req,res) => {
    console.log(req);
    res.send("<h1> fodase </h1>")
})
app.listen(3000, () =>{
    console.log("Serv rd")
})