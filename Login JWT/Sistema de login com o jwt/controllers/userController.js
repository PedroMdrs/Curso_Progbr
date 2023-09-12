const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {registerValidate, loginValidate} = require('./validate')


const userController = {

    register: async function (req, res) {

        const {error} = registerValidate(req.body)
        if(error) return res.status(400).send(error.message)

        let findedUser = await User.findOne({ email: req.body.email })
        if (findedUser) return res.status(400).send("Email already exists")

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password)
        })

        try {

            const savedUser = await newUser.save()
            res.send(savedUser)

        } catch (error) {
            res.status(400).send(error)
        }



    },

    login: async function (req, res) {

        const {error} = loginValidate(req.body)
        if(error) return res.status(400).send(error.message)

        let findedUser = await User.findOne({ email: req.body.email })
        if (!findedUser) return res.status(401).send("Email or password incorrect")

        let correctPassword = bcrypt.compareSync(req.body.password, findedUser.password)
        if (!correctPassword) return res.status(401).send("Email or password incorrect")

        try {

            
            let token = jwt.sign({ id: findedUser.id, admin: findedUser.admin }, process.env.TOKEN_SECRET)
            res.header('authorization-token', token)
            res.send("User logged in")

        } catch (error) {
            res.status(400).send(error)
        }

    }

}
module.exports = userController