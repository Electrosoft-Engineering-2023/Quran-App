var express = require('express')
var router = express.Router()

const  { 
    updatePage
} = require('../controllers/RemoteController.js')

router.get('/:pageID', updatePage)

module.exports = router