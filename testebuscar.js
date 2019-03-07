/* Teste de Funcionalidade - Receba sua Cotação em Até.
Data da elaboração do teste: 06/03/2019 
Data da validação do teste: 
Versão: 00
Elaborador por: Janaina Fortunato da Silva
*/


const puppeteer = require('puppeteer');
//const  moment = require('moment');

(async () => {
  const browser = await puppeteer.launch({headless:false, slowMo:10})
  const page = await browser.newPage()
  


  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://elomilhas.com.br/#/')
  
  await page.setViewport({ width: 1366, height: 657 })
  
  await page.waitForSelector('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(1) > div > div > input')
  await page.click('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(1) > div > div > input')
  await page.type('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(1) > div > div > input', 'São Paulo - Todos Aeroportos (SAO)')
  
  await page.waitForSelector('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(2) > div > div > input')
  await page.click('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(2) > div > div > input')
  await page.type('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(2) > div > div > input', 'Chile, Santiago (SCL)')
  
  await page.waitForSelector('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(3) > div > div.react-datepicker-wrapper > div > input')
  await page.click('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(3) > div > div.react-datepicker-wrapper > div > input')
  await page.type('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(3) > div > div.react-datepicker-wrapper > div > input', '06/03/2019')
  await page.click('body')

  await page.waitForSelector('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(4) > div > div > div.react-datepicker-wrapper > div > input')
  await page.click('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(4) > div > div > div.react-datepicker-wrapper > div > input')
  await page.waitForSelector('.panel-body > .form-horizontal > .form-group > .col-xs-6:nth-child(3) > .form-control', '2')
  await page.type('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(4) > div > div > div.react-datepicker-wrapper > div > input', '20/03/2019')
  await page.waitForSelector('.panel-body > .form-horizontal > .form-group > .col-xs-6:nth-child(3) > .form-control', '2')
 
  await page.waitForSelector('.panel-body > .form-horizontal > .form-group > .col-xs-6:nth-child(3) > .form-control')
  await page.click('.panel-body > .form-horizontal > .form-group > .col-xs-6:nth-child(3) > .form-control')
  await page.type('.panel-body > .form-horizontal > .form-group > .col-xs-6:nth-child(3) > .form-control', '3')

  await page.select('.panel-body > .form-horizontal > .form-group > .col-xs-6:nth-child(4) > .form-control', '2')
  
  await page.waitForSelector('.panel-body > .form-horizontal > .form-group > .col-xs-6:nth-child(4) > .form-control')
  await page.click('.panel-body > .form-horizontal > .form-group > .col-xs-6:nth-child(4) > .form-control')
  await page.type('.panel-body > .form-horizontal > .form-group > .col-xs-6:nth-child(4) > .form-control', '3')

 await page.waitForSelector('.col-xs-12 > .panel > .panel-body > .form-horizontal > .btn')
 await page.click('.col-xs-12 > .panel > .panel-body > .form-horizontal > .btn')


  await navigationPromise
  await page.waitFor(10);
  
  await browser.close();

})();
