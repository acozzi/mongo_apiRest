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
app.get('/apitest', (req , res) => {
  res.status(200).send({message: 'Tested OK'});
});
module.exports = app;