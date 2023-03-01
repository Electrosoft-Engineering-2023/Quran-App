var express = require('express');
var router = express.Router();

// get data.js in api
const products = require('../api/data.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express' });
});

router.get('/api/products', function(req, res, next) {
  const partial_products = products.map(product => {
      return { id: product.id, name: product.name }
  })
  res.json(partial_products)
});

router.get('/api/products/:productID', (req, res) => {
  const id = Number(req.params.productID)
  const product = products.find(product => product.id === id)

  //if no product
  if (!product) {
    return res.status(404).send('Product not found')
  }
  res.json(product)
})


module.exports = router;
