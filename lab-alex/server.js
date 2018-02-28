'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errors = require('http-errors');
const debug = require('debug')('list:server');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = express();


app.listen(PORT, () => {
  debug(`listening on ${PORT}`);
});