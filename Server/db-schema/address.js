/**
 * Created by zhiyuans on 9/21/2016.
 */
const Schema = require('mongoose').Schema;

const addressSchema = new Schema({
  province: String,
  city: String,
  district: String,
  street: String,
  streetNumber: Number,
  lng: Number,
  lat: Number
});

module.exports = addressSchema;