var express = require('express')
var router = express.Router()

const  { 
    getSurahList,
    updatePage,
    
} = require('../controllers/RemoteController.js')
router.get('/surahlist', getSurahList)
router.get('/page/:pageID', updatePage)
module.exports = router