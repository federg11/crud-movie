const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
//const logger = require('morgan');
const methodOverride = require("method-override");

//const indexRouter = require('./routes/index');
//const usersRouter = require('./routes/users');
const moviesRouter = require('./routes/movies');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride("_method"));

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000")
});

app.use('/', moviesRouter);
//app.use('/users', usersRouter);
//app.use('/movies', moviesRouter);

module.exports = app;