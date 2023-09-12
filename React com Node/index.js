const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')
require('dotenv').config()

const videos = ["HEwAiwttN10", "jShc_5KGyDU", "Yw8R3VpTghk", "t6I8ZO3g_WE", "h4VJGNNSQnw"]

app.get('/api/videos', (req, res) => {
    res.send(videos)
})
// if (process.env.NODE_ENV != "development") {
app.use(express.static(path.join(__dirname, 'front/build')))

app.get("*", (req, res) => {
    res.send(path.join(__dirname, 'front/build/index.html'), (error) => {
        res.status(500).send(error)
    })
})
// }

app.listen(PORT, () => {
    console.log("server running on port", PORT)
})
