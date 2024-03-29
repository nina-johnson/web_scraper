// const rp = require('request-promise');
const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://www.reddit.com';

puppeteer
    .launch()
    .then(function(browser) {
        return browser.newPage();
    })
    .then(function(page) {
        return page.goto(url).then(function() {
            return page.content();
        })
    })
    .then(function(html) {
        $('h3', html).each(function() {
            console.log( $(this).text() );
        })
    })
    .catch(function(error) {
        console.log( `Something didn't work.`, error );
    })