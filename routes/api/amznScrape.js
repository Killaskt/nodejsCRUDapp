const express = require('express');
const router = express.Router();

const puppeteer = require('puppeteer')

const desiredItem = 'phones';

const urls = `https://www.amazon.com/s?k=${desiredItem}`;


async function scrapeAMZN(url) {
    /* Initiate the Puppeteer browser */
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    /* Go to the IMDB Movie page and wait for it to load */
    await page.goto(url, { waitUntil: 'networkidle0' })
        .catch((e,res) => console.log(e));
    /* Run javascript inside of the page */
    let data = await page.evaluate(() => {
            // returns HTML Collection
            //since amazon has sales but the original price is present, selecting for the a-offscreen class doesnt work
            const imgs = document.getElementsByClassName('s-image')
            const o = document.getElementsByClassName('a-price-whole')
            const i = document.getElementsByClassName('a-price-fraction')
            const links = document.querySelectorAll('div.sg-col-inner h2 a')
            
            
            //creates an array out of the HTML collection
            const priceWhole = [...o] 
            const priceFrac = [...i]
            const imgList = [...imgs]
            const linkArr = [...links]

            // make arrays out of the attributes we want
            const completePrices = priceWhole.map(function (x, i) { 
                z = x.innerText.replace(/(\r\n|\n|\r)/gm,"");  // cleans the string in the priceWhole array '8 (carriage return)' -> '8'
                return `$${z}${priceFrac[i].innerText}`   // makes '8' and '.14' into '8.14'
            })
            const imgSrc = imgList.map(s => s.getAttribute('src'))
            const namesList = imgList.map(s => s.getAttribute('alt'))
            const linkList = linkArr.map(r => r.href)

            
            // create array of dictionaries with names and prices 
            const official = imgSrc.map(function(x,i) {
                return {'name': namesList[i], 'price': completePrices[i], 'img':x, 'src': linkList[i]};
            })
            
            return official
    }).catch(e => console.log('error with browser: ' + e));

    /* Outputting what we scraped */
    console.log('scraper ran!');
    await browser.close();
    return data;
  };

  router.get('/', (req, res) => {
    res.header("Content-Type",'application/json');
    scrapeAMZN(urls).then((x) => res.json(x)).catch(e => console.log(e))
    return;
});

//   scrapeAMZN(urls);

  module.exports = router;

//   console.log(urls)