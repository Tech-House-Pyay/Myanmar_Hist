var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose');
var session=require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter=require('./routes/admin');
var seedoRouter=require('./routes/seeAdo');
var eatRouter=require('./routes/EatAnddrink');
var teRouter=require('./routes/travelleressential');
var tourRouter=require('./routes/Tour');
var eventRouter=require('./routes/festivalAevent');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://Mhwayei:<password>@myanhistcluster-r6gwb.mongodb.net/test?retryWrites=true&w=majority');
var db=mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection server:'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: "chichi1209",
  resave:false,
  saveUnintialized:true
}));

app.use(function (req,res,next) {
  res.locals.sd=req.session.sd
  next();

});

app.use('/', indexRouter);
app.use(function (req,res,next) {
  if(req.session.sd){
  next();
  }else{
    res.redirect('/signin');
  }
});
app.use('/admin',adminRouter);

app.use('/seeAdo',seedoRouter);
app.use('/eat',eatRouter);
app.use('/festivalAevent',eventRouter);
app.use('/travelleressential',teRouter);
app.use('/Tour',tourRouter);
app.use('/users', usersRouter);






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

module.exports = app;
