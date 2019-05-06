var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var serverRoutes = require('./routes');

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use('/', serverRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(3000, function() {
    console.log('Listening on 3000!');
});