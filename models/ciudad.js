'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
   "_id": String,
   "dist": Number,
   "lid": Number,
   "fid": Number,
   "int_number": Number,
   "name": String,
   "province": String,
   "lat": String,
   "lon": String,
   "zoom": String,
   "updated":Number,
   "weather":{
      "humidity": Number,
      "pressure": Number,
      "st": Number
      "visibility": Number,
      "wind_speed": Number,
      "id": Number,
      "description": String,
      "temp": Number,
      "wing_deg": String,
      "tempDesc": String,
   },
   "forecast":null
}
);
module.exports = mongoose.model('smn', schema);