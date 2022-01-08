const {getMenu, getAbout} = require('../data/dataBase');

module.exports = {
    index: (req, res) => {
        res.render('index', {
            menu: getMenu,
            about: getAbout
        })
    },
    detalle: (req, res) => {
        let platoId = getMenu.find(element => {
            return element.id === +req.params.id
        })
        res.render('detalleMenu', {plato: platoId})
    }
}