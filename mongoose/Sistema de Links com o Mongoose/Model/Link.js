const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    url: { type: String, required: true },
    click: { type: Number, default: 0 },

})

module.exports = mongoose.model('Link', linkSchema)