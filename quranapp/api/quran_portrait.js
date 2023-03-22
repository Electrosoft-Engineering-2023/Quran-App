const fs = require('fs');
const pages = JSON.parse(fs.readFileSync(appRoot+'/api/surahlist2.json'));


module.exports = pages