/**
 * Created by ZhiyuanSun on 16/9/11.
 */
/**
 * Created by ZhiyuanSun on 16/9/11.
 */


var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

// view engine setup
var ROOT_PATH = path.dirname(__dirname);
app.use(express.static(path.join(ROOT_PATH, 'dist')));
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', path.join(ROOT_PATH, 'dist'));

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());

app.get('/', function(req, res, next){
  "use strict";
  res.render('index.html');
});

module.exports = app;


