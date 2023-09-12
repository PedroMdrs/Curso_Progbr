const express = require('express')
const path = require('path');
const app = express();

app.use("/meusite", express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
    res.type('txt')
    res.send("<h1> vai toma no cu </h1>")
})
const port = 5000
app.listen(port, () => {
    console.log(`server runinng on port: ${port}`)
})
