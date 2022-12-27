const {defineConfig} = require("cypress");
module.exports = {
  projectId: "v4pcra",
  e2e: {
    env: {
    users: {     
      correct_user: {
        username: "mikecytest@gmail.com",
        password: "1234567890", 
      }
    }
    },
    baseUrl: 'https://store.dandelionchocolate.com/',
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    hideXHR: true,
    viewportWidth: 1280,
    viewportHeight: 900
    
  }
};

