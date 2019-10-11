const { By, Key, until, promise } = require('selenium-webdriver');

module.exports = async function(driver,deley) {
  let dotsBtnQuery = By.css('product-item button.i-dots');
  await driver.sleep(deley*2);
  await driver.wait(until.elementLocated(dotsBtnQuery));
  await driver.findElement(dotsBtnQuery).click();
  await driver.sleep(deley);

  let switchBtnQuery = By.css('product-item button.i-switch');
  await driver.wait(until.elementLocated(switchBtnQuery));
  await driver.findElement(switchBtnQuery).click();
  await driver.sleep(deley);

  let substituteBtnQuery = By.css('ngb-modal-window button.substitute-btn');
  await driver.wait(until.elementLocated(substituteBtnQuery));
  await driver.findElement(substituteBtnQuery).click();
  await driver.sleep(deley);
}
