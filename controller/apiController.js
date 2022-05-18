const scraperProcess = require('../scrapper/index')
const WebData = require('../models/dataModel')

async function handleApi(req,res){
    const {url,selector} = req.body

    console.log(req.body)
    scrapperObject = {
        url,
        async scrape(browser){
            let page = await browser.newPage();
            console.log(`Navigating to ${this.url}...`);
            await page.goto(this.url);   
            await page.waitForSelector('body');
            let newPage = await browser.newPage();
            await newPage.goto(url);

            let contents = await newPage.$eval(selector, content=>content.innerHTML);
            
            await newPage.close();
            await WebData.create({...req.body,body:contents})
            console.log(contents)
            }
         
    }
  
    scraperProcess(scrapperObject)

    res.json(req.body)
}
async function handleGetApi(req,res){
    const webData = await WebData.findAll()
    res.json(webData)
}

module.exports = {
    handleApi,
    handleGetApi
}