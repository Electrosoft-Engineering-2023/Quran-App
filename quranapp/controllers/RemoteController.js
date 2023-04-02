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
    const fileName = __dirname +'/../public/surahlist2.json'
    const surahs = JSON.parse(fs.readFileSync(fileName));
    res.render('surah-list', { 
        title: 'Surah List',
        layout: './layouts/remote',
        surahs: surahs,
    });
})




module.exports = {
    getSurahList,
    updatePage,

}