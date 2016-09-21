/**
 * Created by ZhiyuanSun on 16/9/20.
 */

'use strict';
const express = require('express');
const logger = require('morgan');

let app = express();

// loggers
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send(`hello world!`);
});

module.exports = app;