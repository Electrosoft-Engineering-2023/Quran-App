const qr = require("qrcode");
var ip = require('ip');

const getPages = ((req, res) => {
    const surahs = require(appRoot + '/api/surah.js')
    var address = "http://"+ip.address()+":3000/imam";
    qr.toDataURL(address, (err, src) => {
        res.render('surah', { 
            src,
            title: 'Surah',
            layout: './layouts/full-width',
            surahs: surahs,
        });
    });

})
const getPagesPortrait = ((req, res) => {
    const pages_portrait = require(appRoot + '/api/quran_portrait.js')
    var address = "http://"+ip.address()+":3000/imam";
    qr.toDataURL(address, (err, src) => {
        if (err) src="";
        res.render('quran', { 
            src,
            title: 'Quran Portrait',
            layout: './layouts/full-width',
            surahs: pages_portrait,
        });
    });
})
const getQR = ((req, res) => {
    var address = "http://"+ip.address() +":3000/imam";
    
    qr.toDataURL(address, (err, src) => {
        if (err) res.send({ qrsrc: '#' });
        // res.set('Content-Type', 'text/html');
        res.contentType('json');
        res.send({ qrsrc: src });
        // res.send({ qrsrc: JSON.stringify({response:src}) });
    });
})


module.exports = {
    getPages,
    getPagesPortrait,    
    getQR
}