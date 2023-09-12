const express = require('express')
const app = express();
const bodyParser = require('body-parser');
var aluno = require('./routes/aluno')


app.use(bodyParser.urlencoded())

app.use('/aluno', aluno)
app.get('/', (req, res) => {

    res.send("<h1> hello wrodl </h1>")

})

app.listen(3000, () => {

    console.log("server rodando")

})