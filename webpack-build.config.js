var baseConfig = require('./webpack/base-config');
var configurationCreator = require('webpack-configuration');
var path = require('path');

module.exports = configurationCreator(baseConfig, {
  commonsChunk: true,
  longTermCaching: true,
  extractCSS: true,
  path: 'server/cloud/',
  publicPath: "http://localhost:2992/assets/",
  versionMap: path.join(__dirname, 'server/assets.json'),
  featureFlags: {
    CODE_SPLITTING: true
  },
  debug: false
});
