var parse = require('./../parse');

exports.getUser = function(req, res, next) {
	var email = req.param("email");
	
	parse.find('User', { "email": email }, function (err, response) {
		if (!err) {
			res.json(200, response);
		}
		else {
			res.json(400, {"err": "Invalid email"});
		}
	});
}