const http = require("http");
const url = require("url")
const fs = require('fs')


function handleFile(req, res, cb) {
    let path = url.parse(req.url).pathname;
    let fileName = "." + path;
    if (fileName == "." || fileName == "./") {
        fileName = "./index.html"
    }

    fs.readFile(fileName, (erro, data) => {
        if (erro) {
            if (cb) {
                if (!cb(req, res)) {
                    res.writeHead(404, { "Content-Type": "text/html" })
                    res.end("Erro 404 <h1> Pagina nao encontrada </h1>")
                }
            }

        } else {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write(data)
            res.end()
        }

    })
}
function handleRequest(req, res) {
    let path = url.parse(req.url).pathname;

    if (path == "/teste") {
        res.end("teste")
        return true
    }
    return false
}
http.createServer((req, res) => {
    handleFile(req, res, handleRequest)
}).listen(3000, (erro) => {
    if (erro) {
        console.log(erro)
    } else {
        console.log("Servidor rodando na porta 3000")
    }
})