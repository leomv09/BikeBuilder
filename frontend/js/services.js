var BikeBuilderServices = angular.module('BikeBuilder.Services', []);

BikeBuilderServices.service("BikePartsService", [function() {


}]);

BikeBuilderServices.service("UsersService", [function() {

	this.getUser = function(id) {
		var defer = $q.defer();
		
		$http.get('localhost:4242/user/' + id).
			success(function(data, status, headers, config) {
				defer.resolve(data);
			}).
			error(function(data, status, headers, config) {
				defer.reject(data);
			});
		
		return defer.promise;
	}

}]);