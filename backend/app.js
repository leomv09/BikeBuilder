// Modules.
var http = require('http');
var express = require("express");

// Routes.
var user = require("./routes/user");
var bike = require("./routes/bike");
var parts = require("./routes/parts");

//App and server.
var app = express();
var server = http.createServer(app);

// Configuration.
app.set('port', process.env.PORT || 4242);
app.configure(function () {
  app.use(express.logger('dev'));
	app.use(express.bodyParser());
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
});

// REST API
app.get('/v1/user/:email', user.getUser);
app.get('/v1/bike/:id', bike.getBike);
app.get('/v1/parts/:id', parts.getPartById);
app.get('/v1/products/:query', parts.getPartsByQuery);
app.get('/v1/categories/:category/parts', parts.getPartsByCategory);
app.get('/v1/categories', parts.getCategories);
app.post('/v1/bike', bike.createBike);
app.put('/v1/user/:id/bike/:bike', user.addBike);


// Start web service.
server.listen(app.get('port'), function() {
  console.log('Server listening on port ' + server.address().port);
});