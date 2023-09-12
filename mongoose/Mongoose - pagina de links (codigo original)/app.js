const express = require('express');
const app = express();
const port = 3000
const linkRoute = require("./routes/linkRoutes")
const path = require('path')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/newLinks',)

app.use('/', linkRoute)

let db = mongoose.connection;

db.on("error", () => { console.log("houve um erro") })
db.once("open", () => {
    console.log("banco carregado")

})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

app.listen(port, () => {
    console.log("example app listening on port")
})