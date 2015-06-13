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

exports.getPartsByQuery = function(req, res) {
	var query = req.param("query");
	
	if (query) {
		request('http://productapipqa-vip.bcinfra.net:9000/v1/products?q=' + query + '&site=competitivecyclist&limit=1000', function (error, response, body) {
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
		res.send(400, {"err": "Missing query"});
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

exports.getCategories = function(req, res) {
	categories = [];
    categories.push({ name: "Wheels, Tires, Tubes", id: "ccCat100407"});
    categories.push({ name: "Drivetrain, Brakes", id: "ccCat100417"});
    categories.push({ name: "Forks, Cockpit, Pedals", id: "ccCat100478"});
    res.json(200, categories);
}