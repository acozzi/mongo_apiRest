'use strict'
var Ciudad = require('../models/ciudad');
function pruebas(req , res) {
  res.status(200).send(
    {message: 'Tested OK'}
  )
};
function insert(req,res) {
  var ciudad = new Ciudad();
  var params = req.body;
  if (params.name) {
    ciudad.name = params.name;
    ciudad.province = params.province;

    ciudad.save((err,ciudadStored) => {
      if (err) {
        res.status(500).send({message: 'Error al intentar guardar el objeto en la base.'});
      } else {
          if (ciudadStored) {
            res.status(200).send({ciudad: ciudadStored});
          } else {
            res.status(200).send({message: 'No se ha guardado.'});
          }
      }
    })
  }
  else {
    res.status(200).send({message: 'Error: Faltan Parametros.'});
  }
};
module.exports = {
  pruebas,
  insert
};