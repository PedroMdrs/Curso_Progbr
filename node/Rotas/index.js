const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())

let alunos = [{ id: 0, nome: "pedro" }, { id: 1, nome: "llll" }, { id: 2, nome: "qqqqq" }]
app.get('/alunos/:id', (req, res) => {

    console.log(alunos[req.params.id])
    let aluno = alunos[req.params.id]
    res.json(aluno)

})
app.get('/aluno', (req, res) => {

    let aluno = alunos[req.query.id]
    res.json(aluno)
    console.log(aluno)

})
app.listen(3000, () => {

    console.log("server rodando")

})