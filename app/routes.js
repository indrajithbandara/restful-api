// app/routes.js
var Restaurant = require('./models/restaurant');

module.exports = function(app, router, mongoose) {

    router.get('/', function(req, res){
        res.json({payload: "hello world!!"});
    });

    router.route('/restaurants')
        //get list of all restaurants
        .get(function(req, res){
            Restaurant.find(function(err, data){
                if (err) {
                    res.send(err);
                }
                res.json(data);
            });
        })//end of get

        //add new restaurant
        .post(function(req, res){
            console.log(req.query);
            var restaurant = new Restaurant();
            restaurant.name = req.query.name;

            restaurant.save(function(err){
                if (err) {
                    res.send(err);
                }
                res.json({payload: 'Restaurant created!'});
            });
        });//end of post

};//end of exports
