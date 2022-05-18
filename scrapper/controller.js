const scrapeContent = async (browserInstance,pageScraper)=>{
    let browser;
    try{
        browser = await browserInstance
        await pageScraper.scrape(browser)
    }catch(err){
       console.log(err)
    }
}
module.exports = (browserInstance,pageScraper)=>scrapeContent(browserInstance,pageScraper)
