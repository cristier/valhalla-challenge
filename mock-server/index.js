var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/cards', function(req, res) {
    console.log("GET From SERVER");
    let data = require('./assets/cards');
    res.send(data);
});

app.get('/cards/1', function(req, res) {
    console.log("GET From SERVER");
    let data = require('./assets/card-javascript');
    res.send(data);
});

app.get('/cards/2', function(req, res) {
    console.log("GET From SERVER");
    let data = require('./assets/card-css');
    res.send(data);
});

app.get('/cards/3', function(req, res) {
    console.log("GET From SERVER");
    let data = require('./assets/card-html');
    res.send(data);
});

app.get('/cards/4', function(req, res) {
    console.log("GET From SERVER");
    let data = require('./assets/card-node');
    res.send(data);
});

app.get('/cards/5', function(req, res) {
    console.log("GET From SERVER");
    let data = require('./assets/card-python');
    res.send(data);
});

app.get('/cards/6', function(req, res) {
    console.log("GET From SERVER");
    let data = require('./assets/card-angular');
    res.send(data);
});

// Example to do POST
app.post('/ingredients', function(req, res) {
    var ingredient = req.body;
    console.log(req.body);
    ingredients.push(ingredient);
    res.status(200).send("Successfully posted ingredient");
});

app.listen(3000, function() {
    console.log('Listening on 3000!');
});