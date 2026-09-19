import puppeteer from 'puppeteer-core';
import { pathToFileURL } from 'node:url';
const [,, html, out, w, h] = process.argv;
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new', args: ['--hide-scrollbars'],
});
const page = await browser.newPage();
await page.setViewport({ width: +w, height: +h, deviceScaleFactor: 2 });
await page.goto(pathToFileURL(html).href, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);
await new Promise(r => setTimeout(r, 400));
await page.screenshot({ path: out, type: 'png' });
await browser.close();
console.log('wrote', out);
