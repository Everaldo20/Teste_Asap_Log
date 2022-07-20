const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8e18b7',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
