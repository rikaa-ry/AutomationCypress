const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Config base URL Itera
    baseUrl: 'https://itera-qa.azurewebsites.net/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    pageLoadTimeout: 100000,
  },
});
