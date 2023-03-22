var express = require('express')
var router = express.Router()

const  { 
    getPages,
    getPagesPortrait,    
} = require('../controllers/SurahController.js')

router.get('/', getPages)
router.get('/portrait', getPagesPortrait)


module.exports = router