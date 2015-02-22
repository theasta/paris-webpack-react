var express = require('express');
var app = express();

app.use('/assets', express.static(__dirname + '/cloud'));

var server = app.listen(2992, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

var serverCreator = require('./lib/server-creator');

serverCreator({
  staticServer: true,
  versionMap: true
});
