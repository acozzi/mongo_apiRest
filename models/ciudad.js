'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
   "name": String,
   "province": String  
}
);
module.exports = mongoose.model('smn', schema);