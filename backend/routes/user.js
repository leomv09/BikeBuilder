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

exports.addBike = function(req, res) {
    var user_id = req.param("id");
	var bike_id = req.param("bike");
	
	if (bike_id && user_id) {
        parse.find('User', user_id, function (err, userResponse) {
            if(!err){
                var bikes = userResponse.bikes;
                bikes.push(bike_id);
                parse.update('User', user_id, { "bikes" : bikes }, function (err, response) {
                    if (err) {
                        res.json(500, {"err":err});
                    }
                    else{
                        res.json(200, {"message": "Bike added to user succesfully"});
                    }
                });
            }
            else{
                res.json(404, {"err":"Cannot find any user"});
            }
        });
	}
	else {
        res.json(400, {"err":"Invalid bike or user"});
	}
}


exports.getBikes = function(req, res) {
    var user = req.param("id");
	var bikesIDs = [];
    var allBikes = [];
    
    if(user){
        parse.find('User', user, function (err, userResponse) {
            if(!err){
                bikesIDs = userResponse.bikes;   
            }
            else{
                res.json(404, {"err":"Cannot find any user"});
            }
        });
        parse.findMany('Bike', '', function (err, response) {
            if(!err){
                allBikes = response;   
            }
            else{
                res.json(404, {"err":"Cannot find any user"});
            }
        });
        console.log("IDS: "+ bikesIDs.length);
        console.log("Bikes: "+ allBikes);
    }
    else
        res.json(400, {"err":"Invalid user"});
    res.json(400, {"err":"Invalid user"});
}
