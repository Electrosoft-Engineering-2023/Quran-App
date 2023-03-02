const pages = require('../api/surah.js')

const getPages = ((req, res) => {
    res.json(pages)
})

const getPage= ((req, res) => {
    const id = Number(req.params.pageID)
    const page = pages.find(page => page.id === id)

        if (!page) {
        return res.status(404).send('Page not found')
    }
    res.json(page)
})


module.exports = {
    getPages,
    getPage
}