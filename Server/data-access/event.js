/**
 * Created by ZhiyuanSun on 16/9/21.
 */

const mongoose = require('./mongodb');
const eventSchema = require('../db-schema/event');

const eventContext = mongoose.model('event', eventSchema);

module.exports = eventContext;