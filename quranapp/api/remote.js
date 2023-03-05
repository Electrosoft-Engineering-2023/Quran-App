const fs = require('fs');
const remote = JSON.parse(fs.readFileSync('../public/remote.json'));


module.exports = remote