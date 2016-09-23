/**
 * Created by ZhiyuanSun on 16/9/20.
 */

'use strict';
const express = require('express');
const logger = require('morgan');

const eventSelection = require('./routes/event/event-selection');

let app = express();

// loggers
app.use(logger('dev'));

app.use('/v1', eventSelection);

app.get('/', (req, res) => {
  res.send(`hello world!`);
});

module.exports = app;