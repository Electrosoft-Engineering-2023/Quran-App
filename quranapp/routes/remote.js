var express = require('express')
var router = express.Router()

const  { 
    updatePage,
    updatePageNumber
} = require('../controllers/RemoteController.js')

router.get('/:pageID', updatePage)
router.post('/page', updatePageNumber)

module.exports = router