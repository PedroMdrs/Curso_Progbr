const express = require('express');
const Router = express.Router();
const linkController = require('../Controllers/linkController')
var methodOverride = require('method-override')

Router.use(methodOverride('_method'))


Router.get('/:title', linkController.redirect)
Router.get('/', linkController.allLinks)
Router.get('/add', (req, res) => {
    res.render('add', { error: false, body: {} })
})
Router.get('/:title', linkController.redirect)
Router.get('/edit/:id', linkController.loadLink)

Router.post('/', express.urlencoded({ extended: true }), linkController.addLink)
Router.post('/edit/:id', express.urlencoded({ extended: true }), linkController.editLink)

Router.delete('/:id', linkController.deleteLink)
Router.delete('/', express.urlencoded({ extended: true }), linkController.deleteLink)


module.exports = Router
