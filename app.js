var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var products = require('./routes/products');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'disc', 'images/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//for develop
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'src/javascript')));
//end for develop

//for minified version
//app.use(express.static(path.join(__dirname, 'disc')));
//end for minified version

//app.use(express.static('public'));
app.use(express.static('./node_modules/angular'));
app.use(express.static('./node_modules/jquery/dist'));
app.use(express.static('./node_modules/requirejs'));
app.use(express.static('./node_modules/requirejs-text'));
app.use(express.static('./node_modules/angular-ui-grid'));
app.use(express.static('./node_modules/q'));
app.use(express.static('./node_modules/angular-bootstrap'));
app.use(express.static('./node_modules/bootstrap/dist'));
app.use(express.static('./node_modules/underscore'));
app.use(express.static('./node_modules/d3'));
app.use('/', routes);
app.use('/products', products);

//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
