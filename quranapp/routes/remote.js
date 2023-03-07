var express = require('express')
var router = express.Router()

const  { 
    getSurahList,
    updatePage,
    getSurahPage,
    
} = require('../controllers/RemoteController.js')
router.get('/surahlist', getSurahList)
router.get('/page/:pageID', updatePage)
router.get('/surahlist/:pageID', getSurahList)
module.exports = router