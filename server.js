//server.js
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config/config.js');

//allows us to parse the query string
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//we will run on port 8080
app.set('port', 8080);
app.set('secretKey', config.secret);

//instance of express router
var router = express.Router();

//database setup
var mongoose = require('mongoose');
mongoose.connect(config.database);

//unprotected routes
require('./app/userRoutes.js')(app, router); // load our user routes and pass in our app

//middleware
require('./app/middleware.js')(app, router);

//all routes will use /api
app.use('/api', router);

//protected routes
require('./app/routes.js')(app, router); // load our routes and pass in our app



app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
