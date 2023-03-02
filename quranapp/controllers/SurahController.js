const products = require('../api/data.js')

const getProducts = ((req, res) => {
    res.json(products)
})

module.exports = {
    getProducts,
}