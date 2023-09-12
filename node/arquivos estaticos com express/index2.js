const express = require('express')
const app = express();
const path = require('path')

app.use("/sexo",express.static(path.join(__dirname, "client")))
const port = 5000;
app.listen(port, () =>{
    console.log(`rodando na porta ${port}`)
})