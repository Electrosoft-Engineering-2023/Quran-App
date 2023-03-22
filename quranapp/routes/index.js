var express = require('express');
var router = express.Router();
const qr = require("qrcode");



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

router.get("/index", (req, res) => {
  res.render("index", { 
    title: 'Index',
    layout: './layouts/full-width' });
});
router.post("/scan", (req, res) => {
  const url = req.body.url;
  if (url.length === 0) res.send("Empty Data!");
  
  qr.toDataURL(url, (err, src) => {
      if (err) res.send("Error occured");
      res.render("scan", { 
        src,
        title: 'Index',
        layout: false});
  });
  // res.json({message: 'message here'});
});

module.exports = router;
