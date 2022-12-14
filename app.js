var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//for rest api
const bodyParser = require('body-parser');
const cors = require('cors');


var app = express();


// app.configure(function(){
//   app.use(express.bodyParser());
// });

//db related
const mongoose = require("mongoose");
require("dotenv/config");

mongoose.connect(process.env.DB_CONNECTION,{ useUnifiedTopology: true,useNewUrlParser: true },() => {
  console.log("connect DB!")
});
//post related
const postRouter = require('./routes/webapi_0');


// app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
//set the path of public for front end use the resource in public
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
//post related


app.use('/webapi_0', postRouter);
app.use(cors());
app.use(bodyParser.json());


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('pages/error');
});

module.exports = app;
// module.exports = router ;