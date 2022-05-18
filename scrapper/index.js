const {createBrowser} = require('./browser');
const scraperController = require('./controller');

let browserInstance = createBrowser();

module.exports = (scraperObject)=>scraperController(browserInstance,scraperObject)
