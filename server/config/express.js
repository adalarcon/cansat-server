const express 	 = require('express');
const app        = express();

const bodyParser = require('body-parser');
const path       = require('path');
const appRoot    = require('app-root-path');
const config     = require('./config');
const api        = require('../routes/api');
const logger     = require('morgan');
const helmet     = require('helmet');
const busboyBodyParser = require('busboy-body-parser');

// Security Helmet
console.info("[app] Security Helmet Enabled ");
app.use(helmet());

// static files
console.info("[app] Setting static directory ");
app.use(express.static(path.join(appRoot.path, 'app')));
app.use(express.static(path.join(appRoot.path, 'public')));

//logs
app.use(logger('dev'));

// CORS
console.info("[app] CORS enabled ");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, set-cookie, x-access-token, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

app.get('/home', function(req, res){
  res.sendfile(appRoot.path + '/public/app/index.html');
});

app.get('/history', function(req, res){
  res.sendfile(appRoot.path + '/public/app/index.html');
});

// Body parser
console.log("[app] Body parser ");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(busboyBodyParser({ limit: '10mb' }));

// Routes API file for interacting with MongoDB
console.log("[app] Routes APIs ");
app.use(api);

// secrete
app.set("secret", config.security.secrete);

// setting port
app.set('port', process.env.PORT || 3000);

module.exports  = app;
