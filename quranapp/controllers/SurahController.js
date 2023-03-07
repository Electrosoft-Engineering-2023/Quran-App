const surahs = require('../api/surah.js')

const getPages = ((req, res) => {
    res.render('surah', { 
        title: 'Surah',
        layout: './layouts/full-width',
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