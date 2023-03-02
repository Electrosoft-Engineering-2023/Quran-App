// import surahs from './surah.json' assert {type: 'json'};
const fs = require('fs');
const surahs = JSON.parse(fs.readFileSync(__dirname+'/surah.json'));


module.exports = surahs