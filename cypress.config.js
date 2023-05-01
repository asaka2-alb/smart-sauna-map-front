// eslint-disable-next-line import/no-extraneous-dependencies
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  videoCompression: false,
  e2e: {
    baseUrl: 'http://localhost:5000',
  },
  // testFiles: 'cypress/integration/**/*.spec.js',
  component: {
    specPattern: 'src/**/*.spec.{js,ts,jsx,tsx}',
    supportFile: 'cypress/support/component.js',
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
