const { defineConfig } = require("cypress");
const loginData = require("./cypress/fixtures/loginData.json"); // Importing JSON data

const env = {
  production: {
    url: "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    ...loginData.production
  },
  uat: {
    url: "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    ...loginData.uat
  },
};
const viewports = {
  iphone_xr: { width: 414, height: 896 },
  desktop: { width: 1280, height: 720 },
};
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const environment = config.env.env || 'production'; 
      const viewport = config.env.viewport || 'desktop';
      console.log(`Running in ${environment} environment with ${viewport} viewport`);

      config.env = env[environment] || env.production;
      const selectedViewport = viewports[viewport] || viewports.desktop;
      config.viewportWidth = selectedViewport.width;
      config.viewportHeight = selectedViewport.height;
      return config;
    },
  },
 
});
