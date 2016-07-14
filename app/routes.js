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
            restaurant.name = req.body.name;

            restaurant.save(function(err){
                if (err) {
                    res.send(err);
                }
                res.json({payload: 'Restaurant created!'});
            });
        });//end of post

    //route to get by id, working with single items
    router.route('/restaurants/:restaurant_id')
        //will return and display the json for that specific restaurant
        .get(function(req, res){
            Restaurant.findById(req.params.restaurant_id, function(err, restaurant){
                if (err) {
                  res.send(err);
                }
                res.json(restaurant);
            });
        })

        //change and override information for this specific restaurant
        .put(function(req, res){
            Restaurant.findById(req.params.restaurant_id, function(err, restaurant){
                if (err) {
                    res.send(err);
                }
                //update restaurant db entry
                restaurant.name = req.body.name;
                restaurant.save(function(err){
                    if (err) {
                        res.send(err);
                    }
                    res.json({payload: 'Restaurant updated!'});
                });
            });
        });

};//end of exports
