const express = require('express')
const app = express();
const port = 3000
const path = require('path')
const linkRoutes = require('./Routes/linkRoutes')
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/newLinks')

app.use('/', linkRoutes)

let db = mongoose.connection

db.on('error', (error) => {
    console.log("An error has occured", error)
})
db.once('open', () => {
    console.log("database loaded")
})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'Templates'))


app.listen(port, (req, res) => {
    console.log("server running")
})