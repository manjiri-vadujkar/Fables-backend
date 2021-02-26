require('dotenv').config();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { createDbPool } = require('./common/db');
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const booksRoutes = require('./routes/books.routes');

createDbPool();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors());

app.use('/api/auth', authRoutes);

app.use(async (req, res, next) => {
  try {
    if (req.method !== 'OPTIONS') {
      const bearerToken = req.headers.authorization;
      if (!bearerToken || !bearerToken.startsWith('Bearer ')) {
        res.statusCode = 403;
        return res.send({
          data: {},
          message: 'Forbidden. Please provide appropriate token via Bearer authorization'
        });
      }
      const token = bearerToken.substr(7);
      const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
      req.decodedToken = decodedToken;
      next();
    } else {
      next();
    }
  } catch (e) {
    return res.status(401).send({
      data: {},
      message: 'Unauthorized'
    });
  }
});

app.use('/api/user', userRoutes);
app.use('/api/books', booksRoutes);

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
  res.json({ err });
});

module.exports = app;
