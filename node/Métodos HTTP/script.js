// A internet funciona em cima do protocolo HTTP
// HTTP eh um conjunto de regras, que definem como as paginas da internet devem ser feitas para que todos trabalhem em cima da mesma "lingua"
// Dentro do protocolo http existem metodos, os mais importantes sao: "Get", "Post", "Delete" e "put"
// O "get" eh usado para quando eh preciso ler um dado do servidor que vai ser mostrado no navegador, por exemplo,yy ler um arquivo html. A maioria das requisicoes que sao feitas na barra de endereco eh uma requisicao "get".
// O 'post' eh utilizado quando eh preciso mandar algum dado para o servidor. Dentro dele eh guardado esse dado em algum banco de dados, arquivo etc. Quando eh enviado 2 dados iguais com o "post", eh gerado 2 gravacoes iguais. Por exemplo, se eh enviado o nome de dois usuarios com o mesmo nome, e o mesmo endereco, o servidor vai verificar se existe os mesmos dados,se ja existe o mesmo vai avisar que nao pode ser recebido, ou eh adicionado um novo elemento que seja igual a ele
// No "put" tambem eh mandado um dado com a requisicao igual ao post, mas o servidor ao inves de verificar e falar se ja existe ou nao aquele dado ele vai sobrescrever o dado ou atualizar o mesmo.
// O 'delete" eh um metodo de requisicao onde eh mandado um identificador e o servidor vai ser capaz de apagar aquele dado de acordo com o identificador
// Eh possivel mandar os 4 metodos pelo front-end atraves do fetch


const http = require('http');
const url = require('url');
const fs = require('fs')

function handleFile(req, res, cb) {
    let path = url.parse(req.url).pathname;

    let fileName = "." + path;

    fs.readFile(fileName, (erro, data) => {
        if (erro) {
            if (cb) {
                if (!cb(req, res)){
                    res.writeHead(404, { "Content-Type": "text/html" })
                    res.end("<h1> pagina nao encontrada </h1>")
                }
            }



        } else {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write(data);
            res.end();
        }
    })
}
function handleRequest(req, res) {
    let path = url.parse(req.url).pathname;

    let method = req.method;
    console.log(method);
    if(method == 'PUT'){
        res.writeHead(404, { "Content-Type": "text/html" })
    }
    if (path == "/teste") {
        res.end("Teste")
        return true;
    }
    return false;
}
http.createServer((request, response) => {

    handleFile(request, response, handleRequest)

}).listen(3000, (error => {
    if (error) {
        console.log(error)
    } else {
        console.log("serv rodnado na port 3k")
    }
}))