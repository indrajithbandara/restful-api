// app/userRoutes.js
var User = require('./models/user');

module.exports = function(app, router){

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

            if (!req.body.username) {
                res.json({success: false, message: 'Please give a username.'})
            }

            if(!req.body.password){
                res.json({success: false, message: 'You did not enter a password.'})
            }

            User.findOne({ username : req.body.username},
                function(err, user){
                    if (err) throw err;

                    if (user) {
                        res.json({success: false, message: 'Username already taken.'});
                    }

                    if(!user) {
                        var user = new User();
                        //has to have a name
                        user.username = req.body.username;
                        //has to have a password
                        user.password = req.body.password;

                        user.save(function(err){
                            if (err) {
                                res.send(err);
                            }
                            res.json({succes: true, message: 'User Created!'});
                        });
                    }
                });

        });//end of post

};//end of exports
