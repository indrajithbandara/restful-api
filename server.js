//server.js
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config/config.js');
var passport = require('passport');

//allows us to parse the query string
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//we will run on port 8080
app.set('port', 8080);
app.set('superSecret', config.secret);

//instance of express router
var router = express.Router();

//database setup
var mongoose = require('mongoose');
mongoose.connect(config.database);

//passport setup
require('./config/passport')(passport);
app.use(passport.initialize());


//all routes will use /api
app.use('/api', router);

//routes
require('./app/routes.js')(app, router, passport); // load our routes and pass in our app
require('./app/userRoutes.js')(app, router, passport); // load our user routes and pass in our app

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
