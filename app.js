'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas
// cargar bodyparser

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// configure CORS
// routes
module.exports = app;