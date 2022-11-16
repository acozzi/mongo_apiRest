'use strict'

var express = require('express');
var ciudadController = require('../controllers/ciudad');

var api = express.Router();
api.get('/pruebas', ciudadController.pruebas);
api.post('/ciudad', ciudadController.insert);

module.exports = api;