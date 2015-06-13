var BikeBuilderControllers = angular.module('BikeBuilder.Controllers', []);

BikeBuilderControllers.controller("CustomizeController", ["$location", "$rootScope", "$scope", "BikePartsService", function ($location, $rootScope, $scope, BikePartsService) {

}]);

BikeBuilderControllers.controller("SocialMediaController", ["$location", "$rootScope", "$scope", "CustomizeService", "UsersService", function ($location, $rootScope, $scope, BikePartsService, UsersService) {

}]);

BikeBuilderControllers.controller("UserController", ["$scope", "$routeParams", "UsersService", function ($scope, $routeParams, UsersService) {
	
	var id = $routeParams.id;
	
	UsersService.getUser(id)
	.then(
		function (user)
		{
			$scope.user = user;
		}
	);
	
}]);
