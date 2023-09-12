const express = require('express')
// path eh um modulo padrao do node
const path = require('path');

const app = express();
app.use("/meusite",express.static(path.join(__dirname, 'client')))
const port = 5000
app.listen(port, () => {
    console.log(`server runinng on port: ${port}`)
})
