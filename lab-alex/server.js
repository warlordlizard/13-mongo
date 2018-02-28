'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errors = require('http-errors');
const debug = require('debug')('list:server');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = express();
const MOGODB_URI = 'mongodb://localhost/gamesdb';

mongoose.connect(MOGODB_URI);

app.use(morgan('dev'));
app.use(cors());
app.use(errors);

app.listen(PORT, () => {
  debug(`listening on ${PORT}`);
});