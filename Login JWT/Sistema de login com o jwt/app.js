require('dotenv').config()
const express = require('express')
const app = express();
const userRoute = require('./routes/userRoute')
const adminRoute = require('./routes/adminRoute')
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGOOSE_URL, (error) => {
    if(error){
        console.log(error)
    }
    else{
        console.log("mongo connected")
    }
})

app.use('/user', express.json(), userRoute)
app.use('/admin', express.json(), adminRoute)

app.listen(process.env.PORT, () => {
    console.log("server running")
})
