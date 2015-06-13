var BikeBuilderControllers = angular.module('BikeBuilder.Controllers', []);

BikeBuilderControllers.controller("CustomizeController", ["$location", "$rootScope", "$scope", "$routeParams", "BikePartsService", function ($location, $rootScope, $scope, $routeParams, BikePartsService) {

	BikePartsService.getAllFrames()
	.then(

			function(products)
			{
				$scope.framesInfo = products;
			}
		)

}]);

BikeBuilderControllers.controller("SocialMediaController", ["$location", "$rootScope", "$scope", "CustomizeService", "UsersService", function ($location, $rootScope, $scope, BikePartsService, UsersService) {

}]);

