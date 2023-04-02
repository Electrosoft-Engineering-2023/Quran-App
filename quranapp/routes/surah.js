var express = require('express')
var router = express.Router()



const  { 
    getPages,
    getPagesPortrait,
    getQR
} = require('../controllers/SurahController.js')

router.get('/', getPages)
router.get('/portrait', getPagesPortrait)
router.post('/getQR',getQR)
module.exports = router