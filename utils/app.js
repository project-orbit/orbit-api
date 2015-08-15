require('./app_require');

//loads .env file for ENVIRONMENT VARIABLES
require('dotenv').load();

var path = require('path'),
express = require('express'),

app = module.exports = express();