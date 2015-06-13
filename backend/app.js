// Modules.
var http = require('http');
var express = require("express");

// Routes.

//App and server.
var app = express();
var server = http.createServer(app);

// Configuration.
app.set('port', process.env.PORT || 4242);
app.configure(function () {
  app.use(express.logger('dev'));
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
});

// REST API

// Start web service.
server.listen(app.get('port'), function() {
  console.log('Server listening on port ' + server.address().port);
});