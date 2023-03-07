const fs = require('fs');
const updatePage = ((req, res) => { 
    const fileName = __dirname +'/../public/remote.json'
    const file = require(fileName);
    const data = Number(req.params.pageID);
    file[0].page = data;

    fs.writeFileSync(fileName, JSON.stringify(file));
    res.status(201).json('Page Updated')

})

const getSurahList = ((req, res) => { 
    const fileName = __dirname +'/../public/surahlist.json'
    const surahs = JSON.parse(fs.readFileSync(fileName));
    res.render('surah-list', { 
        title: 'Surah List',
        layout: './layouts/full-width',
        surahs: surahs,
    });
})
const getSurahPage = ((req, res) => { 
    const fileName = __dirname +'/../public/remote.json'
    const file = require(fileName);
    const data = Number(req.params.pageID);
    file[0].page = data;

    fs.writeFileSync(fileName, JSON.stringify(file));

})



module.exports = {
    getSurahList,
    updatePage,
    getSurahPage,

}