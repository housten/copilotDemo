// Create web server

var express = require('express');
var app = express();

// create server
var server = require('http').createServer(app);

// handle request
app.get('/', function(req, res) {
  res.send('Hello world');
});

// listen
server.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
