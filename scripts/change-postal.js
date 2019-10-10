const { By, Key, until, promise } = require('selenium-webdriver');

const deley = 1000;

module.exports = async function(driver) {
  let postalBtnQuery = By.css('page-cart .pointer.vendor');

  await driver.wait(until.elementLocated(postalBtnQuery));
  await driver.findElement(postalBtnQuery).click();
  await driver.sleep(deley);

  let postalCodeInputQuery = By.css('vendor-selector .search-input');
  await driver.wait(until.elementLocated(postalCodeInputQuery));
  await driver.findElement(postalCodeInputQuery).clear();
  await driver.findElement(postalCodeInputQuery).sendKeys('22222');
  await driver.sleep(deley);

  let selectVendorQuery = By.css('vendor-selector .vendor-item .select-btn');
  await driver.wait(until.elementLocated(selectVendorQuery));
  await driver.findElement(selectVendorQuery).click();
  await driver.sleep(deley);
  await driver.sleep(deley);
  await driver.sleep(deley);
  await driver.sleep(deley);
  await driver.sleep(deley);
}
