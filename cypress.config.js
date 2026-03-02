require('dotenv').config();
const { defineConfig } = require('cypress');
const { allureCypress } = require('allure-cypress/reporter');
const os = require('os');

module.exports = defineConfig({
  chromeWebSecurity: false,
  failOnStatusCode: false,
  defaultCommandTimeout: 15000, 
  pageLoadTimeout: 30000,

  e2e: {
    baseUrl: process.env.FASTSTORE_PREVIEW || 'https://site.fastshop.com.br', 
    supportFile: 'cypress/support/e2e.js',
    watchForFileChanges: false,
    retries: { runMode: 2, openMode: 1 },

    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: process.env.ALLURE_RESULTS_DIR || 'allure-results',
        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          node_version: process.version,
        },
      });

      return config;
    },
  },
});