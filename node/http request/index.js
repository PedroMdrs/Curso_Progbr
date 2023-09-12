// a requisicao tem 3 partes
// linha de requisicao, header e o body
// A linha de requisicao contem o metodo de requisicao que esta sendo feito (get,post,put,delete), o caminho que esta sendo requisitado(p0edro.com.br, localhost), e a versao do http
//  No body vao os dados que sao necessario pra que o servidor consiga fazer algo. Contem os dados da requisicao
// No header tem toda a informacao que eh necessaria pra que o servidor saiba como processar sua informacao. Tipo se o formato do baogulho eh json, ou formulario

const express = require('express');
const app = express();

app.get("/", (req,res) => {
    console.log(req);
    res.send("<h1> fodase </h1>")
})
app.listen(3000, () =>{
    console.log("Serv rd")
})