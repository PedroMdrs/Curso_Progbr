const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let hello = (req, res) => {
    res.send("<h1> qweyoriichi </h1>")
}
let consoleBody = (req, res, next) => {
    console.log(req.body)
    next()
}
app.use('/',express.json())
app.use('/', consoleBody)

app.get("/", hello)
app.post("/", hello)

app.listen(3000, () => {
    console.log("serv rodando")
}) 