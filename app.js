/* Load modules */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

/* Add headers */
app.use(cors());

/* Database configuration */
const database = require('./app/configs/database-config');

/* Init database */
database.init();

/* Express configuration */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* Router configuration */
const REST_API_ROOT = '/api';
app.use(REST_API_ROOT, require('./app/routes/router'));
module.exports = app;