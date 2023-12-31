const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 1, maxlength: 25 },
    email: { type: String, required: true, minlength: 3, maxlength: 50 },
    password: { type: String, required: true, minlength: 6, maxlength: 100},
    createdAT: { type: Date, default: Date.now },
    admin: { type: Boolean, default: false }
})
module.exports = mongoose.model("User", userSchema)