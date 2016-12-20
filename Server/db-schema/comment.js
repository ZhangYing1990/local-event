/**
 * Created by zhiyuans on 9/21/2016.
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const commentSchema = new Schema({
  eventId: ObjectId,    //event外键
  userId: ObjectId,     //user外键
  content: String,
  time: Date
});