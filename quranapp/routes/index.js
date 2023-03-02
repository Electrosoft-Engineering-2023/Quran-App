var express = require('express');
var router = express.Router();

// get data.js in api
const products = require('../api/data.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    layout: './layouts/sidebar' });
});



module.exports = router;
