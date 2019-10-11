const { By, Key, until, promise } = require('selenium-webdriver');

module.exports = async function(driver,deley) {
  let shoppingBtnQuery = By.css('nav .nav-item-shopping a');

  await driver.wait(until.elementLocated(shoppingBtnQuery));
  await driver.findElement(shoppingBtnQuery).click();
  await driver.sleep(deley);


  let addRecipeBtnQuery = By.css('recipe-card-add .i-add-recipe');
  await driver.wait(until.elementLocated(addRecipeBtnQuery));
  await driver.findElement(addRecipeBtnQuery).click();
  await driver.sleep(deley);

  let buyRecipeBtnQuery = By.css('buy-quantity .btn-buy');
  await driver.wait(until.elementLocated(buyRecipeBtnQuery));
  await driver.findElement(buyRecipeBtnQuery).click();
  await driver.sleep(deley/2);

  //await driver.findElement(buyRecipeBtnQuery).click();
  //await driver.sleep(deley/2);
  //await driver.findElement(buyRecipeBtnQuery).click();
  //await driver.sleep(deley/2);
  //await driver.findElement(buyRecipeBtnQuery).click();
  //await driver.sleep(deley);

  let backToCartBtnQuery = By.css('cart-notification button');
  await driver.wait(until.elementLocated(backToCartBtnQuery));
  await driver.findElement(backToCartBtnQuery).click();
  await driver.sleep(deley);

  let postalCodeInputQuery = By.css('vendor-selector .search-input');
  await driver.wait(until.elementLocated(postalCodeInputQuery));
  await driver.findElement(postalCodeInputQuery).sendKeys('11134');
  await driver.sleep(deley);

  let selectVendorQuery = By.css('vendor-selector .vendor-item .select-btn');
  await driver.wait(until.elementLocated(selectVendorQuery));
  await driver.findElement(selectVendorQuery).click();
  await driver.sleep(deley);


  let toCartBtnQuery = By.css('bottom-bar .next-step');
  await driver.wait(until.elementLocated(toCartBtnQuery));
  await driver.findElement(toCartBtnQuery).click();

  await driver.sleep(deley);
}
