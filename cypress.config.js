// eslint-disable-next-line import/no-extraneous-dependencies
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  videoCompression: false,
  baseUrl: 'http://localhost:5000',
  testFiles: 'cypress/integration/**/*.spec.js',
  component: {
    testFiles: '**/*.spec.{js,ts,jsx,tsx}',
    componentFolder: 'src',
  },
});
