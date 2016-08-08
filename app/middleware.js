var jwt = require('jsonwebtoken');

module.exports = function(app, router){

	router.use(function(req, res, next){
		var token = req.headers['x-access-token'];

		if(!token){
			return res.status(403).send({
				success: false,
				message: 'Please provide a token.'
			});
		} else {
			jwt.verify(token, app.get('secretKey'), function(err, credentials){
				if (err) {
					return res.json({success: false, message: 'Token not valid.'});
				} else {
					//saves login info to the request
					req.credentials = credentials;
					next();
				}

			});
		}
	});

};//end of exports
