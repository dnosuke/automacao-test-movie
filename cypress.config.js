const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        reportPageTitle: 'Movie Search Test Report',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
        reportDir: 'cypress/reports',
    },
    e2e: {
        baseUrl: "https://movie-search-sigma.vercel.app",
        viewportWidth: 1280,
        viewportHeight: 720,
        supportFile: "cypress/support/e2e.js",
        screenshotOnRunFailure: true,
        allowCypressEnv: false,
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
            on('task', {
                log(message) {
                    console.log(message);
                    return null;
                },
            });
        },
    },
});
