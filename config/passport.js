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
        passReqToCallback : true
    },
    function(req, username, password, done){
        if (username)
            username = username.toLowerCase(); //we don't really want case sensitive
        process.nextTick(function(){
            User.findOne({'username' : username }, function() {
                if (err)
                    return done(err);
                if (!user)
                    return done(null, false, {error : "Username does not exist."});
                if(!user.validPassword(password))
                    return done(null, false, {error : "Wrong password."});
                else
                    return done(null, user);
            });
        });
    }));//end of login

    //sign up
    passport.use('signup', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, username, password, done){
        if (username)
            username = username.toLowerCase();

        process.nextTick(function() {
            User.findOne({'username' : username}, function(err, user){
                if (err)
                    return done(err);
                if (user) {
                    return done(null, false, {error : "That username is not available."});
                } else {

                    var newUser = new User();
                    newUser.username = username;
                    newUser.password = newUser.generateHash(password);

                    newUser.save(function(err){
                        if (err)
                            return done(err);

                        return done(null, newUser);
                    });
                }});//end of user.findone()
        });//end of process.nextTick()
    }));//end of signup

};//end of exports
