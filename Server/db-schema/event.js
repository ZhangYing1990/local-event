/**
 * Created by zhiyuans on 9/21/2016.
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const EVENT_TYPE = require('../constants/event-type');
const addressSchema = require('./address');

const eventSchema = new Schema({
  title: String,
  abstract: String,
  time: Date,
  types: [String],
  bigPost: String,
  smallPost: String,
  price: {
    beforeDiscount: [Number],
    afterDiscount: [Number]
  },
  address: addressSchema,
  phone: String,
  detail: String,
  comments: [ObjectId],
  isSelection: Boolean
});

module.exports = eventSchema;