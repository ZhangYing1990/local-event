/**
 * Created by zhiyuans on 9/21/2016.
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  username: String,
  icon: String,
  password: String
});