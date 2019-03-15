const puppeteer = require('puppeteer');
(async () =>{
  const browser = await puppeteer.launch({headless: false, slowMo:25})
  const page = await browser.newPage() 

  const navigationPromise = page.waitForNavigation()

await page.goto('https://elomilhas.com.br/#/')

await page.setViewport({ width: 1366, height: 657 })

await navigationPromise

await page.waitForSelector('.form-horizontal > .form-group:nth-child(1) > div > div > .form-control')
await page.click('.form-horizontal > .form-group:nth-child(1) > div > div > .form-control')
await page.type('.form-horizontal > .form-group:nth-child(1) > div > div > .form-control', 'Recife, Guararapes (REC)')

await page.waitForSelector('.form-horizontal > .form-group:nth-child(2) > div > div > .form-control')
await page.click('.form-horizontal > .form-group:nth-child(2) > div > div > .form-control')
await page.type('.form-horizontal > .form-group:nth-child(2) > div > div > .form-control', 'São Paulo - Todos Aeroportos (SAO)')

await page.waitForSelector('.form-group > div > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control')
await page.click('.form-group > div > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control')
await page.type('.form-group > div > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control', '15/03/2019')

await page.waitForSelector('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(4) > div > div > div.react-datepicker-wrapper > div > input')
await page.click('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(4) > div > div > div.react-datepicker-wrapper > div > input')
await page.type('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(4) > div > div > div.react-datepicker-wrapper > div > input', '17/03/2019')

await page.waitForSelector('.panel-body > .form-horizontal > .form-group > .col-xs-6:nth-child(4) > .form-control')
await page.click('.panel-body > .form-horizontal > .form-group > .col-xs-6:nth-child(4) > .form-control')
await page.type('.panel-body > .form-horizontal > .form-group > .col-xs-6:nth-child(4) > .form-control', '1')

await page.waitForSelector('.panel-body > .form-horizontal > .form-group > .col-xs-6:nth-child(4) > .form-control')
await page.click('.panel-body > .form-horizontal > .form-group > .col-xs-6:nth-child(4) > .form-control')

await page.waitForSelector('.col-xs-12 > .panel > .panel-body > .form-horizontal > .btn')
await page.click('.col-xs-12 > .panel > .panel-body > .form-horizontal > .btn')
await navigationPromise

await page.waitForSelector('#form-ida > div:nth-child(10) > center > div > div.col-md-2.col-xs-3.flybox-in.flybox-company > div > div:nth-child(1) > div > label')
await page.click('#form-ida > div:nth-child(10) > center > div > div.col-md-2.col-xs-3.flybox-in.flybox-company > div > div:nth-child(1) > div > label')
await page.waitForSelector('.col-md-3 > .panel > .animated > .btn > .hidden-md')
await page.click('.col-md-3 > .panel > .animated > .btn > .hidden-md')
  
await page.waitForSelector('.col-md-12 > div > .row > .col-md-4:nth-child(1) > .form-control')
await page.click('.col-md-12 > div > .row > .col-md-4:nth-child(1) > .form-control')
await page.type('.col-md-12 > div > .row > .col-md-4:nth-child(1) > .form-control', ' Janaina')

await page.waitForSelector('.col-md-12 > div > .row > .col-md-4:nth-child(2) > .form-control')
await page.click('.col-md-12 > div > .row > .col-md-4:nth-child(2) > .form-control')
await page.type('.col-md-12 > div > .row > .col-md-4:nth-child(2) > .form-control', 'Fortunato da Silva')

await page.waitForSelector('.col-md-12 > div > .row > .col-md-4:nth-child(3) > .form-control')
await page.click('.col-md-12 > div > .row > .col-md-4:nth-child(3) > .form-control')
await page.type('.col-md-12 > div > .row > .col-md-4:nth-child(3) > .form-control', 'janainafortunato@mangue3.com')

 try {
  await page.waitForSelector('.col-md-12 > div > .row > .col-md-3 > #adult-cpf')
  await page.click('.col-md-12 > div > .row > .col-md-3 > #adult-cpf')
  await page.type('.col-md-12 > div > .row > .col-md-3 > #adult-cpf', '53266942043')
 } catch (error) {
   
 } 

await page.waitForSelector('.col-md-12 > div > .row > .col-md-3 > #adult-phone')
await page.click('.col-md-12 > div > .row > .col-md-3 > #adult-phone')
await page.type('.col-md-12 > div > .row > .col-md-3 > #adult-phone', '8199999999')

await page.waitForSelector('.col-md-12 > div > .row > .col-md-2 > .date')
await page.click('.col-md-12 > div > .row > .col-md-2 > .date')
await page.type('.col-md-12 > div > .row > .col-md-2 > .date', '13/10/1987')

await page.waitForSelector('.col-md-12 > div > .row > .col-md-2 > #adult-gender')
await page.click('.col-md-12 > div > .row > .col-md-2 > #adult-gender')
await page.type('.col-md-12 > div > .row > .col-md-2 > #adult-gender', 'F')

//Ação de informa a bacagem do cliente (usa uma condição depois)

//await page.waitForSelector('div > .row > .col-xs-6 > .form-input > label')
//await page.click('div > .row > .col-xs-6 > .form-input > label')

await page.waitForSelector('.row > .col-md-12 > .row > .col-md-4:nth-child(1) > #child-fullname')
await page.click('.row > .col-md-12 > .row > .col-md-4:nth-child(1) > #child-fullname')
await page.type('.row > .col-md-12 > .row > .col-md-4:nth-child(1) > #child-fullname', 'Ana Maria')

await page.waitForSelector('.row > .col-md-12 > .row > .col-md-4:nth-child(2) > #child-fullname')
await page.click('.row > .col-md-12 > .row > .col-md-4:nth-child(2) > #child-fullname')
await page.type('.row > .col-md-12 > .row > .col-md-4:nth-child(2) > #child-fullname', 'Silva Mello')

await page.waitForSelector('.row > .col-md-12 > .row > .col-md-2 > .date')
await page.click('.row > .col-md-12 > .row > .col-md-2 > .date')
await page.type('.row > .col-md-12 > .row > .col-md-2 > .date', '13/10/2009')

await page.waitForSelector('.row > .col-md-12 > .row > .col-md-2 > #adult-gender')
await page.click('.row > .col-md-12 > .row > .col-md-2 > #adult-gender')
await page.type('.row > .col-md-12 > .row > .col-md-2 > #adult-gender', 'F')

//Ação de informa a bacagem do cliente (usa uma condição depois)

//await page.waitForSelector('.row > div > .col-xs-6 > .form-input > label')
//await page.click('.row > div > .col-xs-6 > .form-input > label')

await page.waitForSelector('.panel > .panel-body > .row > .col-md-6:nth-child(1) > .form-control')
await page.click('.panel > .panel-body > .row > .col-md-6:nth-child(1) > .form-control')
await page.type('.panel > .panel-body > .row > .col-md-6:nth-child(1) > .form-control', 'Janaina Fortunato da Silva')

await page.waitForSelector('.panel > .panel-body > .row > .col-md-6:nth-child(2) > .form-control')
await page.click('.panel > .panel-body > .row > .col-md-6:nth-child(2) > .form-control')
await page.type('.panel > .panel-body > .row > .col-md-6:nth-child(2) > .form-control', 'janainafortunato@mangue.com')

await page.waitForSelector('.panel-body > .col-xs-12:nth-child(4) > .panel > .panel-body > img')
await page.click('.panel-body > .col-xs-12:nth-child(4) > .panel > .panel-body > img')

await page.waitForSelector('.panel-body > .row > div > .col-md-4:nth-child(1) > .form-control')
await page.click('.panel-body > .row > div > .col-md-4:nth-child(1) > .form-control')
await page.type('.panel-body > .row > div > .col-md-4:nth-child(1) > .form-control', 'Janaina Fortunato da Silva')

await page.waitForSelector('.panel-body > .row > div > .col-md-4:nth-child(2) > .form-control')
await page.click('.panel-body > .row > div > .col-md-4:nth-child(2) > .form-control')
await page.type('.panel-body > .row > div > .col-md-4:nth-child(2) > .form-control', 'janainafortunato@mangue.com')

await page.waitForSelector('.panel-body > .row > div > .col-md-4 > #gateway-cpf_cnpj')
await page.click('.panel-body > .row > div > .col-md-4 > #gateway-cpf_cnpj')
await page.type('.panel-body > .row > div > .col-md-4 > #gateway-cpf_cnpj', '53266942043')

await page.waitForSelector('.row > .col-md-12 > .row > .col-md-12 > #observation')
await page.click('.row > .col-md-12 > .row > .col-md-12 > #observation')
await page.type('.row > .col-md-12 > .row > .col-md-12 > #observation', 'Mala com produtos de beleza e presentes para familiares.')

await page.waitForSelector('.col-md-12 > .row > .col-md-8 > .be-checkbox > label')
await page.click('.col-md-12 > .row > .col-md-8 > .be-checkbox > label')
  
await page.waitForSelector('.row > .col-md-12 > .row > .col-md-4 > .btn')
await page.click('.row > .col-md-12 > .row > .col-md-4 > .btn')
   

await navigationPromise

  await page.waitFor(40)
  await navigationPromise
  await browser.close()
  
})();