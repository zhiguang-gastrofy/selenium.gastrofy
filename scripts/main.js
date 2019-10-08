const { Builder, By, Key, until, promise } = require('selenium-webdriver');
const addRecipes = require('./add-recipes');

(async function main() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://v5-dev.gastrofy.se');
    await addRecipes(driver);

  } finally {
    await driver.quit();
  }
})();
