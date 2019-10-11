const { By, Key, until, promise } = require('selenium-webdriver');

module.exports = async function(driver,deley) {
  await driver.get('https://v5-dev.gastrofy.se/search/recipes');

  let searchInputQuery = By.css('search-input .form-input');
  await driver.wait(until.elementLocated(searchInputQuery));
  await driver.findElement(searchInputQuery).sendKeys('pasta');
  await driver.sleep(deley);

  let filterBtnQuery = By.css('srp-topbar button.i-filter');
  await driver.wait(until.elementLocated(filterBtnQuery));
  await driver.findElement(filterBtnQuery).click();
  await driver.sleep(deley);

  let filteItemQuery = By.css('recipe-filters .filter-sub-item');
  await driver.wait(until.elementLocated(filteItemQuery));
  await driver.findElement(filteItemQuery).click();
  await driver.sleep(deley);

  let closeFilterQuery = By.css('side-overlay button.i-angle-right');
  await driver.wait(until.elementLocated(closeFilterQuery));
  await driver.findElement(closeFilterQuery).click();
  await driver.sleep(deley);

  let buyRecipeBtnQuery = By.css('buy-quantity .btn-buy');
  await driver.wait(until.elementLocated(buyRecipeBtnQuery));
  await driver.findElement(buyRecipeBtnQuery).click();
  await driver.sleep(deley/2);

  await driver.findElement(buyRecipeBtnQuery).click();
  await driver.sleep(deley/2);

  let backToCartBtnQuery = By.css('cart-notification button');
  await driver.wait(until.elementLocated(backToCartBtnQuery));
  await driver.findElement(backToCartBtnQuery).click();
  await driver.sleep(deley);

  let toCartBtnQuery = By.css('bottom-bar .next-step');
  await driver.wait(until.elementLocated(toCartBtnQuery));
  await driver.findElement(toCartBtnQuery).click();
  await driver.sleep(deley);
}
