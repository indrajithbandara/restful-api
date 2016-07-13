//server.js
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//allows us to parse the query string
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//we will run on port 8080
app.set('port', 8080);

//instance of express router
var router = express.Router(); 

router.get('/', function(req, res){
    res.json({payload: "hello world!!"});
});

app.use('/api', router);

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
