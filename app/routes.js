// app/routes.js
var Restaurant = require('./models/restaurant');

module.exports = function(app, router, mongoose) {

    router.get('/', function(req, res){
        res.json({payload: "hello world!!"});
    });

    router.route('/restaurants')

        //add new restaurant
        .post(function(req, res){
            var restaurant = new Restaurant();
            restaurant.name = req.body.name;

            restaurant.save(function(err){
                if (err) {
                    res.send(err);
                }
                res.json({payload: 'Restaurant created!'});
            });
        })

};
