require('dotenv').config()
const express = require('express')
const app = express()
const userRoute = require('./routes/userRouter')
const mongoose = require('mongoose');
const adminRoute = require('./routes/adminRouter')

mongoose.connect(process.env.MONGO_CONNECTION_URL, (error) =>{
    if(error){
        console.log(error)
    }else{
        console.log("mongo connected")
    }
})

app.use('/user', express.json() ,userRoute )
app.use('/admin', express.json(), adminRoute)
app.listen(process.env.PORT, () => {
    console.log("server running")
})