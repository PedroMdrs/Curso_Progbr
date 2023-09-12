const User = require('../models/user')
const jwt = require('jsonwebtoken')



module.exports = async function (req, res, next) {

    const token = req.header('authorization-token')
    if (!token) return res.status(401).send("access denied")

    try {
        const userVerified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = userVerified
        console.log( userVerified)
        next()
    } catch (error) {
        return res.status(401).send("access denied")
    }
}