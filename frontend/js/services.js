var BikeBuilderServices = angular.module('BikeBuilder.Services', []);

BikeBuilderServices.service("BikePartsService", ["$rootScope", "$q", "$http", function($rootScope, $q, $http) {


function parseFrames(data)
{
	var products = data.products;
	return products;
}	

this.getAllFrames = function()
{
	var defer = $q.defer();
	$http.get('http://localhost:4242/v1/products/custom-road-bikes-frames').
		  success(function(data, status, headers, config) 
		  {
		  	var products = parseFrames(data);
		  	defer.resolve(data);
		    	
		  }).
		  error(function(data, status, headers, config) {
		    defer.reject(error);
		  });
	return defer.promise;
}

this.getFrame = function(id)
{
	var defer = $q.defer();
	$http.get('http://localhost:4242/v1/parts/' + id).
		  success(function(data, status, headers, config) 
		  {
		  	defer.resolve(data);
		    	
		  }).
		  error(function(data, status, headers, config) {
		    defer.reject(error);
		  });
	return defer.promise;
}

}]);

BikeBuilderServices.service("UsersService", ["$q", "$http", function($q, $http) {

	this.getUser = function(id) {
		var defer = $q.defer();
		
		$http.get('http://localhost:4242/v1/user/' + id)
			.success(function(data, status, headers, config) {
				defer.resolve(data);
			})
			.error(function(data, status, headers, config) {
				defer.reject(data);
			});
		
		return defer.promise;
	}

}]);