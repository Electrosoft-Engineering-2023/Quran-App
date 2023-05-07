var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bp = require("body-parser");
var logger = require('morgan');
const expressLayouts = require('express-ejs-layouts')
const qr = require("qrcode");


const port = process.env.PORT || 3000;
var app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var surahRouter = require('./routes/surah');
var remoteRouter = require('./routes/remote');

// view engine setup
app.use(expressLayouts)
app.set('views', path.join(__dirname, 'views'));
// app.set('layout', './views/layouts/full-width')
app.set('layout', false)
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, 'public')));

global.appRoot = path.resolve(__dirname);

// app.use(bp.urlencoded({ extended: false }));
// app.use(bp.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/surah', surahRouter);
app.use('/remote', remoteRouter);

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
  res.render('error');
});

//socket io
io.on('connection', (socket) => {
  socket.on('imam', data => {
    io.emit('page', data);
  });
});
http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});

module.exports = app;
