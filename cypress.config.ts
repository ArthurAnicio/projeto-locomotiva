import { defineConfig } from "cypress";

export default defineConfig({
component: {
  devServer: {
    framework: "next",
    bundler: "webpack",
  },
  setupNodeEvents(on, config) {
    require("@cypress/code-coverage/task")(on, config);
    return config;
  },
},
  e2e: {
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);
      return config;
    },
  },
});
