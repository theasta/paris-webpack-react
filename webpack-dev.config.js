var baseConfig = require('./webpack/base-config');
var configurationCreator = require('webpack-configuration');

module.exports = configurationCreator(baseConfig, {
  commonsChunk: false,
  //commonsChunkMin: 2,
  extractCSS: false,
  path: 'server/dist/',
  publicPath: "/assets/",
  featureFlags: {
    CODE_SPLITTING: false
  },
  debug: true
});
