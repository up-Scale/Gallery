require('newrelic');
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');
const router = require('./routes.js');

const db = require('../db/index.js')
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname + '/../react-client/dist/')));
app.use(parser.json());

app.use('/', router);

app.listen(3000, () => {
  console.log('listening on 3000')
});

module.exports.app = app;