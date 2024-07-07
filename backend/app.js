const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const usersRouter = require('./routes/users');
const mongoose = require('mongoose');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let dev_db_url = 'mongodb://localhost:27017/express-mongoose';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB)
  .then(r => console.log('Connected to MongoDB'))
  .catch(e => console.log('Error connecting to MongoDB'));

app.use('/users', usersRouter);

module.exports = app;
