const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {loginValidate, registerValidate} = require('./validate')

const userController = {

    register: async function (req, res) {

        const {error} = registerValidate(req.body)

        if(error) {return res.status(400).send(error.message)}

        let findedUser = await User.findOne({ email: req.body.email })

        if (findedUser) return res.status(400).send("Email already exists")



        const user = new User({


            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),

        })

        try {
            const savedUser = await user.save();
            res.send(savedUser)
        } catch (error) {
            res.status(400).send(error)
        }
    },

    login: async function (req, res) {

        const {error} = loginValidate(req.body)

        if(error) {return res.status(400).send(error.message)}

        let findedUser = await User.findOne({ email: req.body.email })

        if (!findedUser) return res.status(400).send("Email or Password incorrect")

        let correctPassword = bcrypt.compareSync(req.body.password, findedUser.password)
        if (!correctPassword) return res.status(400).send("Email or Password incorrect")


        let token = jwt.sign({_id: findedUser._id, admin: findedUser.admin}, process.env.TOKEN_SECRET)
        res.header('authorization-token',token)
        res.send("user loged in")
    },
}

module.exports = userController