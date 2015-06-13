var parse = require('./../parse');

exports.getUser = function(req, res, next) {
	var email = req.param("email");
	res.json({"response": email});
}