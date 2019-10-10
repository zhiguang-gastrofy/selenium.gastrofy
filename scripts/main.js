const { Builder, By, Key, until, promise } = require('selenium-webdriver');
const addRecipes = require('./add-recipes');
const changePostal = require('./change-postal');

(async function main() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://v5-dev.gastrofy.se');
    await addRecipes(driver);
    await changePostal(driver);

  } finally {
    await driver.quit();
  }
})();
