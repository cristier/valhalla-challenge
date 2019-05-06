var express = require('express');
var routes = express();

routes.get('/cards', function(req, res) {
    let data = require('./data/cards');
    let condition = req.query && req.query.id;
    let response = condition ? data.filter( card => card.cardId == req.query.id ) : data;
    res.send(response);
});

// Example to do POST
routes.post('/ingredients', function(req, res) {
    var ingredient = req.body;
    console.log(req.body);
    ingredients.push(ingredient);
    res.status(200).send("Successfully posted ingredient");
});

module.exports = routes;