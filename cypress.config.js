const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
		specPattern: "src/tests/e2e-integration/tests/*.spec.cy.{js,jsx,ts,tsx}",
		screenshotOnRunFailure: false,
		video: false,
		viewportWidth: 1920,
		viewportHeight: 1080,
		supportFile: "src/tests/e2e-integration/support/e2e.js",
  },
});
