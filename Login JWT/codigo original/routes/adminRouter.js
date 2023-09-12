const express = require('express')
const router = express.Router();
const auth = require('../controllers/authController')


router.get('/', auth, (req,res) => {
    console.log('get admiin')
    if(req.user.admin){
        
        res.send("dado do admin")
    }else{
        res.status(401).send('Access Denied: not admin')
    
    }
})
router.get('/free', auth, (req, res) => {
    res.send("dado visto por qm esta logado apenas")
})

module.exports = router