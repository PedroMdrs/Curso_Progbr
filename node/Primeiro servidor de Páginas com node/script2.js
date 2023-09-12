const http = require('http');
const url = require('url')
const fs = require('fs')

http.createServer((request, response) => {
    let path = url.parse(request.url).pathname;
    if(path == '' || path == "/"){
        path = "/index.html"
    }
    let fileName = "." + path

    fs.readFile(fileName, (error, data) => {
        if(error){
            response.writeHead(404, {"Content-Type" : "text/html"})
            response.end("error 404 <br> <h1> Page not found </h1>")
        }else{
            response.writeHead(200, {"Content-Type" : "text/html"})
            response.write(data);
            response.end()

        }
    } )
}).listen(3000, (erro) => {
    if(erro){
        console.log(erro)
    }else{
        console.log("servidor rodando na porta 3k")
    }
})