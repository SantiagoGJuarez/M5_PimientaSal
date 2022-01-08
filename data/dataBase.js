const fs = require('fs');

module.exports = {
    getMenu: JSON.parse(fs.readFileSync('./data/menu.json', 'utf-8')),
    getAbout: JSON.parse(fs.readFileSync('./data/about.json', 'utf-8'))
}