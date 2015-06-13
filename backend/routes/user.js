var parse = require('./../parse');

exports.getUser = function(req, res, next) {
	var id = req.param("id");
	
	parse.find('User', id, function (err, response) {
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
    
    if(user){
        parse.find('User', user, function (err, userResponse) {
            if(!err){
                bikes = userResponse.bikes;
								parse.findMany('Bike', '', function (err, response) {
										if(!err){
												all = response.results;
												var result = [];
											
												for (i = 0; i < bikes.length; i++) {
													if (all.indexOf(bikes[i]) != -1) {
														result.push(bikes[i]);
													}
												}
												
												res.json(result);
										}
										else{
												res.json(404, {"err":"Cannot find any bike"});
										}
								});
            }
            else{
                res.json(404, {"err":"Cannot find any user"});
            }
        });
    }
    else {
        res.json(400, {"err":"Invalid user"});
		}
}
