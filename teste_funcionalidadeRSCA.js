/* Teste de Funcionalidade - Receba sua Cotação em Até.
Data da elaboração do teste: 22/02/2019 
Data da validação do teste: 
Versão: 00
Elaborador por: Janaina Fortunato da Silva
*/

const puppeteer = require('puppeteer');
//const moment = require('moment');

(async () => {
  const browser = await puppeteer.launch({headless:false, slowMo:30});
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://elomilhas.com.br/#/')
  
  await page.setViewport({ width: 1366, height: 657 })
  
  await page.waitForSelector('#name')
  await page.click('#name')
  await page.type('#name', ' Janaína Fortunato da Silva')
  
  await page.waitForSelector('#form-quotation > div:nth-child(4) > div > input')
  await page.click('#form-quotation > div:nth-child(4) > div > input')
  await page.type('#form-quotation > div:nth-child(4) > div > input', 'janainafortunato@mangue3.com')
  
  await page.waitForSelector('#form-quotation > div:nth-child(5) > div > input')
  await page.click('#form-quotation > div:nth-child(5) > div > input')
  await page.type('#form-quotation > div:nth-child(5) > div > input', '(81) 91111-1111')
  
  await page.waitForSelector('#milhasGOL')
  await page.click('#milhasGOL')
  await page.type('#milhasGOL', 'Vender 200 Mil Milhas-GOL')
  
  await page.waitForSelector('#form-quotation > button.btn.btn-primary-custom.btn-lg.btn-block.btn-custom-mobile')
  await page.click('#form-quotation > button.btn.btn-primary-custom.btn-lg.btn-block.btn-custom-mobile')
  
  await navigationPromise
  await page.waitFor(20)
  
  await browser.close();
})();