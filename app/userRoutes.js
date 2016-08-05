// app/userRoutes.js
var User = require('./models/user');

module.exports = function(app, router, mongoose){

    /***********************
          USERS
    ************************/
    router.route('/users')
        //get list of all users
        .get(function(req, res){
            User
            .find()
            //.populate('users')
            .exec(function (err, users) {
              if (err) res.send(err);
              res.json(users);
            })
        })//end of get

        //add new user
        .post(function(req, res){
            console.log(req.query);
            var user = new User();
            //has to have a name
            user.username = req.body.username;
            //has to have a password
            user.password = req.body.password;


            user.save(function(err){
                if (err) {
                    res.send(err);
                }
                res.json({payload: 'User Created!'});
            });
        });//end of post


};//end of exports
