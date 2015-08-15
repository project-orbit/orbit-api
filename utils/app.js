//add appRequire function to global scope"
require('./app_require');

//loads .env file for ENVIRONMENT VARIABLES
require('dotenv').load();

var path = require('path'),
express = require('express'),
bodyParser = require('body-parser'),

//initialize app to global scope
app = module.exports = express();

//add middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

