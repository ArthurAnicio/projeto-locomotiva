import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack'
    },
   specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}', 
    excludeSpecPattern: ['src/pages/**/*'],
    video: false,
    viewportHeight: 880,
    viewportWidth: 1366,
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'tests/test-output-[hash].xml',
      toConsole: true,
      attachments: true
    }
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
