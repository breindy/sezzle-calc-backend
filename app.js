var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');
var cors = require('cors');

dotenv.config();

var dbConfig = require('./db/config/config');
var indexRouter = require('./routes/index');
var recentRouter = require('./routes/recent');
var insertRouter = require('./routes/insert');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/recent', recentRouter);
app.use('/insert', insertRouter);

module.exports = app;
