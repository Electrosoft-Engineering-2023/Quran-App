var express = require('express')
var router = express.Router()

const  { 
    getProducts,
} = require('../controllers/SurahController.js')


router.get('/:productID', getProducts)

module.exports = router