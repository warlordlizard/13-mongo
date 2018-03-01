'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const errors = require('./lib/error-middleware.js');

const mongoose = require('mongoose');
const debug = require('debug')('list:server');
const listRouter = require('./route/list-route.js');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost/gamesdb';

mongoose.connect(MONGODB_URI);

app.use(cors());
app.use(morgan('dev'));
app.use(listRouter);
app.use(errors);


app.listen(PORT, () => {
  debug(`listening on ${PORT}`);
});