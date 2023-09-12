const express = require('express');
const app = express();
const path = require('path');
app.use("/fodase",express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
    res.type('html')
    res.send("<h1> oi </h1>")

})
const port = 5000
app.listen(5000, (erro) => {
    if (erro) {
        console.log(erro)

    } else {
        console.log(`server running on ${port}`)
    }
})