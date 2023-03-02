var express = require('express')
var router = express.Router()

const  { 
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct 
} = require('../controllers/products.js')


router.get('/:productID', getProduct)

router.put('/:productID', updateProduct) 

router.delete('/:productID', deleteProduct)

module.exports = router