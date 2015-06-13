var parse = require('./../parse');
var request = require('request');

exports.getPartById = function(req, res) {
	var id = req.param("id");
	
	if (id) {
		request('http://productapipqa-vip.bcinfra.net:9000/v1/products/' + id, function (error, response, body) {
			if (error) {
				res.send(400, {"err": error});
			}
			else {
				res.json(200, JSON.parse(body))	;
			}
		});
	}
	else {
		res.send(400, {"err": "Missing id"});
	}
}

exports.getPartsByCategory = function(req, res) {
	var category = req.param("category");
	
	if (category) {
		request('http://productapipqa-vip.bcinfra.net:9000/v1/categories/' + category + '/products?site=competitivecyclist&limit=1000', function (error, response, body) {
			if (error) {
				res.send(400, {"err": error});
			}
			else {
				content = JSON.parse(body);
				console.log(content.products.length);
				res.json(200, content.products);
			}
		});
	}
	else {
		res.send(400, {"err": "Missing category"});
	}
}