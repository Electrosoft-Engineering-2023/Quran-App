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
        res.render('quran', { 
            src,
            title: 'Quran Portrait',
            layout: './layouts/full-width',
            surahs: pages_portrait,
        });
    });

    
})


module.exports = {
    getPages,
    getPagesPortrait,    
}