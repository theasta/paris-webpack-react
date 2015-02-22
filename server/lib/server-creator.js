var express = require('express');
var path = require('path');
var _ = require('lodash');

module.exports = function (options) {

  var defaultOptions = {
    staticServer: true,
    versionMap: false
  };

  options = _.defaults(options || {}, defaultOptions);

  var app = express();
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'jade');

  if (!options.staticServer) {
    app.use('/assets', express.static(path.join(__dirname, '../dist'))); //__dirname + '/dist'
  }

  var versionMap = {};
  if (options.versionMap) {
    versionMap = require('../assets.json');
  }

  var getVersionName = function (fileName) {
    return versionMap[fileName] || fileName;
  };

  var getTemplateData = function (routeName) {
    var publicPath = (options.staticServer) ? 'http://localhost:2992/assets/': 'assets/';

    var templateData = {
      title: 'Paris',
      css: publicPath + getVersionName(routeName + '.css'),
      js: publicPath + getVersionName(routeName + '.js'),
      commonsjs: publicPath + getVersionName('commons.js'),
      commonscss: publicPath + getVersionName('commons.css')
    };

    return templateData;
  };

  app.get('/', function (req, res) {
    res.render('layout', getTemplateData('homepage'));
  });

  app.get('/login', function (req, res) {
    res.render('layout', getTemplateData('login'));
  });

  app.get('/plans', function (req, res) {
    res.render('layout', getTemplateData('plans'));
  });

  app.get('/app', function (req, res) {
    res.render('layout', getTemplateData('app'));
  });

  var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
  });
};
