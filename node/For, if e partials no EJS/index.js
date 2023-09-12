const express = require('express')
const fs = require('fs')
const app = express();
const path = require('path')

let users = [{
    id:0,
    name: "pedro",
    phone: "123"
},
{
    id:1,
    name: "a",
    phone: "1265443"
},
{
    id:2,
    name: "e",
    phone: "1454523"
},
{
    id:3,
    name: "h",
    phone: "1987723"
},
{
    id:4,
    name: "jjj",
    phone: "86489"
}]
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render('user', {users})
})

app.get('/about', (req,res)=>[
    res.render('about')
])
app.listen(3000, () =>{
    console.log("servidor rodandosadadasd")
})