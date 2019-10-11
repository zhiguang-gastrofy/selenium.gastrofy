const { Builder, By, Key, until, promise } = require('selenium-webdriver');
const addRecipes = require('./add-recipes');
const changePostal = require('./change-postal');
const substitute = require('./substitute');
const searchRecipe = require('./search-recipe');

(async function main() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://v5-dev.gastrofy.se');
    await addRecipes(driver,1000);
    await changePostal(driver,1000);
    await substitute(driver,1000);
    await searchRecipe(driver,1000);

  } finally {
    await driver.quit();
  }
})();
