var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { 
    title: 'Home',
    layout: './layouts/full-width' });
});
//socket io only
router.get('/imam', function(req, res, next) {
  res.render('imam', { 
    title: 'imam',
    layout: './layouts/full-width' });
});

router.get('/slides', function(req, res, next) {
  res.render('slides', { 
    title: 'Slides',
    layout: './layouts/full-width' });
});
module.exports = router;
