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

app.all('*', (req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use('/v1', eventSelection);

app.get('/', (req, res) => {
  res.send(`hello world!`);
});

module.exports = app;