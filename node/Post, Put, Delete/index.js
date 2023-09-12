const express = require('express')
const path = require('path');
const app = express();

app.use("/meusite", express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
    res.send("<h1> vai toma no cu get</h1>")
})
app.post('/', (req, res) => {
   res.send("<h1> vai se fuider post </h1>")
})
app.put('/', (req, res) => {
    res.send("<h1> vai se fuider put </h1>")
 })
 app.delete('/', (req, res) => {
    res.send("<h1> vai se fuider delete </h1>")
 })
const port = 5000
app.listen(port, () => {
    console.log(`server runinng on port: ${port}`)
})
