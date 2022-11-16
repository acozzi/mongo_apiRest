'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var ciudad_routes = require('./routes/ciudad');
//cargar rutas


// cargar bodyparser

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// configure CORS
// routes
app.use('/api', ciudad_routes);

module.exports = app;