const express = require('express')
const fs = require('fs')
const app = express()

let user = {
    id:0,
    name: "pedr",
    phone: "321321"
}

function render(data, ob) {
    for(let key in ob){
        data = data.replace(`{{{${key}}}}`, ob[key])
    }
    return data
}
app.get('/', (req, res) => {
    fs.readFile('./templates/user.pedro', 'utf-8', (err,data) => {
        if(!err){
            res.send(render(data,user))
        }
    })
   
})
app.listen(3000, () => {
    console.log("server running")
})