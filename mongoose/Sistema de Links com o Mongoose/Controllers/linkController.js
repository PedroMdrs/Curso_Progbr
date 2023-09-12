const Link = require('../Model/Link')

const redirect = async (req, res, next) => {

    let title = req.params.title

    try {
        let link = await Link.findOneAndUpdate({ title }, { $inc: { click: 1 } })

        if (link) {
            res.redirect(link.url)
        } else {
            next()
        }
    } catch (error) {
        res.send(error)
    }

}


const allLinks = async (req, res) => {

    try {
        let links = await Link.find({})
        res.render('all', { links })
    } catch (error) {
        res.send(error)
    }

}

const addLink = async (req, res) => {

    let link = new Link(req.body)
    try {

        await link.save()
        res.redirect('/')
    } catch (error) {
        res.render('add', { error, body: req.body })
    }

}
const loadLink = async (req, res) => {

    let id = req.params.id

    try {

        let link = await Link.findById({ _id: id })

        res.render('edit', { error: false, body: link })
    } catch (error) {
        res.send(error)
    }

}
const editLink = async (req, res) => {

    let link = {};
    link.title = req.body.title
    link.description = req.body.description
    link.url = req.body.url

    let id = req.params.id

    if (!id) {
        id = req.body.id
    }

    try {

        let doc = await Link.updateOne({ _id: id }, link)
        res.redirect('/')

    } catch (error) {

        res.render('edit', { error, body: req.body })

    }
}
const deleteLink = async (req, res) => {

    let id = req.params.id

    if (!id) {
        id = req.body.id
    }

    try {
        await Link.deleteOne({ _id: id })
        res.redirect('/')
    } catch (error) {
        send(error)
    }
}
module.exports = { allLinks, addLink, redirect, loadLink, editLink, deleteLink }