var parse = require('./../parse');

function isValidBike(bike) {
	if (!bike) {
		return false;
	}
	if (!bike.access || typeof bike.access !== "boolean") {
		return false;
	}
	if (!bike.parts || !(bike.parts instanceof Array) || bike.parts.length == 0) {
		return false;
	}
	
	return true;
}

exports.getBike = function(req, res) {
	var id = req.param("id");
	
	parse.find('Bike', id, function (err, bike) {
		if (err) {
			res.json(500, {"err": "Bike not found"});
		}
		else {
			res.json(200, bike);
		}
	});
}

exports.createBike = function(req, res) {
	var bike = req.param("bike");
	var status = 200;
	var message = "Bike inserted succesfully";
	
	if (isValidBike(bike)) {
		parse.insert('Bike', bike, function (err, response) {
			if (err) {
				status = 500;
				message = err;
			}
		});
	}
	else {
		status = 400;
		message = "Invalid bike";
	}
	
	var response = {
		"code" : status,
		"err" : message
	}
	
	res.json(status, response);
}
