const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-type': 'application/json' })
    response.end(JSON.stringify({ texto: "<h1> fodase </h1>" }))
}).listen(3000, (error => {
    if (error) {
        console.log(error)
    } else {
        console.log("serv rodnado na port 3k")
    }
}))