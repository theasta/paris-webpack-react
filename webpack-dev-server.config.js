var baseConfig = require('./webpack/base-config');
var configurationCreator = require('webpack-configuration');

module.exports = configurationCreator(baseConfig, {
  commonsChunk: true,
  publicPath: "http://localhost:2992/assets/",
  featureFlags: {
    CODE_SPLITTING: true
  },
  debug: true,
  hot: true
});
