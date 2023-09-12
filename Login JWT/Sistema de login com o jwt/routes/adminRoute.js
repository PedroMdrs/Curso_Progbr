const express = require('express')
const router = express.Router();
const auth = require('../controllers/authController')


router.get('/', auth, (req, res) => {

    if (req.user.admin) {

        res.send('admin data')
    } else {
        res.status(401).send("not admin: access denied")
    }

})

module.exports = router
