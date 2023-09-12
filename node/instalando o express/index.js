const express = require('express')
// app recebe o objeto express
// roda o construtor do express e guarda dentro de app
const app = express();
const port = 5000
app.listen(port, () => {
    console.log(`server runinng on port: ${port}`)
})
