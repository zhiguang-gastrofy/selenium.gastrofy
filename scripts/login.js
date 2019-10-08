/*
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.gastrofy.se');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('Gastrofy'), 1000);
  } finally {
    await driver.quit();
  }
})();
*/

/*
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    Key = webdriver.Key,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://www.gastrofy.se');

driver.findElement(By.name('q')).sendKeys('webdriver');

driver.sleep(1000).then(function() {
  driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
});

driver.findElement(By.name('btnK')).click();

driver.sleep(2000).then(function() {
  driver.getTitle().then(function(title) {
    if(title === 'Gastrofy') {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
    driver.quit();
  });

  button.getText().then(function(text) {
    console.log('Button text is \'' + text + '\'');
  });

  driver.getTitle().then(function(title) {
    console.log( title );
    driver.quit();
  });
});
*/

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    promise = webdriver.promise;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://www.gastrofy.se');

driver.sleep(7000).then(function() {
  var buttons = driver.findElements(By.className('ficon ficon-account dropdown-toggle'));

  buttons.then((elements)=>{
    elements[0].click();
    driver.sleep(1000).then(function() {
      var usernameInput = driver.findElement(By.id('username'));
      var passwordInput = driver.findElement(By.id('password'));
      usernameInput.sendKeys('robinrendahl@gmail.com');
      passwordInput.sendKeys('gsecure8848');

      driver.sleep(1000).then(function(){
        var submit = driver.findElement(By.css('ngb-modal-window .btn-semi-yellow'));
        submit.click();

        driver.sleep(4000).then(function(){
          driver.findElement(By.css('.cart-banner .btn-cart')).click();

          driver.sleep(2000).then(function(){
            var paymentBtn = driver.findElement(By.css('.summary-section .btn-semi-yellow'));
            driver.executeScript("arguments[0].scrollIntoView()", paymentBtn);
            driver.sleep(1000).then(function(){
              paymentBtn.click();

              console.log( 'done!' );
            });
          });
        });
      });
    });
  });

});
