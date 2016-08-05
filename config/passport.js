//config/passport.js

//we will be using passport's local strategy
var LocalStrategy = require('passport-local').Strategy;
//grab our user model
var User = require('../app/models/user');

module.exports = function(passport) {

    //login
    passport.use('login', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
    },
    function(req, username, password, done){
        if (username)
            username = username.toLowerCase(); //we don't really want case sensitive
        process.nextTick(function(){
            User.findOne({'username' : username }, function() {
                if (err)
                    return done(err);
                if (!user)
                    return done(null, false, req.flash('loginMessage', 'No Such User Found.'));
                if(!user.validPassword(password))
                    return done(null, false, req.flash('loginMessage', 'Wrong Password.'));
                else
                    return done(null, user);
            });
        });
    }));

};//end of exports
