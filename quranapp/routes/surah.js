var express = require('express')
var router = express.Router()

const  { 
    getPages,
    getPage
} = require('../controllers/SurahController.js')

router.get('/', getPages)
router.get('/:surahID', getPage)


module.exports = router