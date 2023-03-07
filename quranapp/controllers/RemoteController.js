const fileName = __dirname +'/../public/remote.json'
const fs = require('fs');
const file = require(fileName);


const updatePage = ((req, res) => { 
    const data = Number(req.params.pageID);
    file[0].page = data;
        
    // fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
    //   if (err) return console.log(err);
    //   console.log(JSON.stringify(file));
    //   console.log('writing to ' + fileName);
    // });
    fs.writeFileSync(fileName, JSON.stringify(file));
    res.status(201).json('Page Updated')

})

const updatePageNumber = ((req, res) => { 
    const data = Number(req.body.pageNum);
    file[0].page = data;
        
    // fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
    //   if (err) return console.log(err);
    //   console.log(JSON.stringify(file));
    //   console.log('writing to ' + fileName);
    // });
    fs.writeFileSync(fileName, JSON.stringify(file));
    res.send({redirect: '/imam'});

})


module.exports = {
    updatePage,
    updatePageNumber
}