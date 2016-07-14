// app/routes.js
var Restaurant = require('./models/restaurant');
var Dish = require('./models/dish');

module.exports = function(app, router, mongoose) {

    router.get('/', function(req, res){
        res.json({payload: "hello world!!"});
    });

    /***********************
          RESTAURANT
    ************************/

    router.route('/restaurants')
        //get list of all restaurants
        .get(function(req, res){
            Restaurant
            .find()
            .populate('dishes')
            .exec(function (err, restaurants) {
              if (err) res.send(err);
              res.json(restaurants);
            })
        })//end of get

        //add new restaurant
        .post(function(req, res){
            console.log(req.query);
            var restaurant = new Restaurant();
            //has to have a name
            restaurant.name = req.body.name;
            //the rest is option for the sake of testing

            if (req.body.description) {
                restaurant.description = req.body.description;
            }
            if (req.body.address) {
                restaurant.address = req.body.address;
            }
            if (req.body.rating) {
                restaurant.rating = req.body.rating;
            }

            restaurant.save(function(err){
                if (err) {
                    res.send(err);
                }
                res.json({payload: 'Restaurant created!'});
            });
        });//end of post
    //END OF

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
                if (req.body.name) {
                    restaurant.name = req.body.name;
                }
                if (req.body.description) {
                    restaurant.description = req.body.description;
                }
                if (req.body.address) {
                    restaurant.address = req.body.address;
                }
                if (req.body.rating) {
                    restaurant.rating = req.body.rating;
                }

                restaurant.save(function(err){
                    if (err) {
                        res.send(err);
                    }
                    res.json({payload: 'Restaurant updated!'});
                });
            });
        })

        //delete a restaurant entry
        .delete(function(req, res) {
            Restaurant.remove({
                _id: req.params.restaurant_id
            }, function(err, bear) {
                if (err)
                    res.send(err);

                res.json({ message: 'Successfully deleted' });
            });
        });

    /***************************************
          RESTAURANT / DISH ASSOCIATION
    ****************************************/

    router.route('/restaurants/dishes/:dish_id')
        //will return all restaurants containing this dish
        .get(function(req, res){
            Restaurant
            .find({ dishes: req.params.dish_id })
            .exec(function (err, restaurants) {
              if (err) res.send(err);
              res.json(restaurants)
            });
        })

        //add dish to dishes at particular restaurant
        .put(function(req, res){
            console.log("\n" + req.body.restaurant + "\n");
            Restaurant.findById(req.body.restaurant, function(err, restaurant){
                if (err) {
                    res.send(err);
                }
                //update restaurant db entry
                restaurant.dishes.push(req.params.dish_id);

                restaurant.save(function(err){
                    if (err) {
                        res.send(err);
                    }
                    res.json({payload: 'Restaurant updated!'});
                });
            });
        })

        //delete a dish from a particular restaurant
        .delete(function(req, res) {
          console.log(req.body.restaurant);
          Restaurant.findById(req.body.restaurant, function(err, restaurant){
              if (err) {
                  res.send(err);
              }
              //remove dish from restaurant's array
              var index = restaurant.dishes.indexOf(req.params.dish_id);
              if (index >= 0) {
                  restaurant.dishes.splice(index, 1);
                  message = "dish deleted from this restaurant!";
              } else {
                message = "That dish is not currently served at this restaurant."
              }

              restaurant.save(function(err){
                  if (err) {
                      res.send(err);
                  }
                  res.json({payload: message});
              });
          });
        });

    /***********************
          DISH
    ************************/

    router.route('/dishes')
        //get list of all dishes
        .get(function(req, res){
            Dish.find(function(err, data){
                if (err) {
                    res.send(err);
                }
                res.json(data);
            });
        })//end of get

        //add new dish
        .post(function(req, res){
            console.log(req.query);
            var dish = new Dish();
            //has to have a name
            dish.name = req.body.name;
            //the rest is option for the sake of testing

            if (req.body.cuisine) {
                dish.description = req.body.cuisine;
            }

            dish.save(function(err){
                if (err) {
                    res.send(err);
                }
                res.json({payload: 'Dish created!'});
            });
        });//end of post
    //END OF

    router.route('/dishes/:dish_id')
    //delete a restaurant entry
    .delete(function(req, res) {
        Dish.remove({
            _id: req.params.dish_id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted disha and removed associations' });
        });
    });
    //END OF

};//end of exports
