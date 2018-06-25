//CONFIGURATIONS
var express = require("express");
var app = express();
//Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json()); //JSON
app.use(bodyParser.urlencoded({extended: true}));
//Path
var path = require("path");
//Angular
app.use(express.static( __dirname + '/public/dist/public' )); 

//SERVER & MODELS
require('./server/config/mongoose.js');

//ROUTES
require('./server/config/routes.js')(app);

//LISTEN
const server = app.listen(8000);

