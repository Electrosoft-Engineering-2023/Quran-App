const surahs = require('../api/surah.js')

const getPages = ((req, res) => {
    imageArr = [];
    // for(let x in surahs){
    //     // var surah = surahs.find(surah => surah.id === surahs[x].id)
    //     //get surah jpg file
    //     var image_name = "/images/alquran/"+surahs[x].surah_num+'-'+surahs[x].surah+'('+surahs[x].first_page+'-'+surahs[x].last_page+').'+surahs[x].file_type;

    //     imageArr.push(image_name);
    // }

    res.render('surahs', { 
        title: 'Surah',
        layout: './layouts/full-width',
        // surahs: JSON.stringify(surahs),
        surahs: surahs,
    });
})
const getPage = ((req, res) => {
    const id = Number(req.params.surahID)
    const surah = surahs.find(surah => surah.id === id)

    //get surah jpg file
    const image_name = "/images/alquran/"+surah.surah_num+'-'+surah.surah+'('+surah.first_page+'-'+surah.last_page+').'+surah.file_type;

    if (!surah) {
    return res.status(404).send('Surah not found')
    }
    // res.json(surah)
    res.render('surah', { 
        title: 'Surah',
        layout: './layouts/full-width',
        surah: JSON.stringify(surah),
        image_name: image_name,
    });
})

module.exports = {
    getPages,
    getPage,
}