var app = angular.module('BikeBuilder', ['ngRoute', 'BikeBuilder.Controllers', 'BikeBuilder.Services']);

app.config(['$routeProvider', function($routeProvider) {
	
  $routeProvider.when("/Start",
    {
      templateUrl: 'views/startoptions.html'
    }
  );
  
  $routeProvider.when("/bike-frames",
    {
      templateUrl: 'views/bikeframes.html',
      controller: 'CustomizeController'
    }
  );

  $routeProvider.when("/Customize/:frameid?",
    {
      templateUrl: 'views/customize.html',
      controller: 'CustomizeController'
    }
  );
  
  $routeProvider.when("/Share/:bikeid?",
    {
      templateUrl: 'views/socialshare.html',
      controller: 'SocialMediaController'
    }
  );

  $routeProvider.when("/Buy/:bikeid?",
    {
      templateUrl: 'views/buy.html',
      controller: 'CustomizeController'
    }
  );
	
	$routeProvider.when("/user/:id",
    {
      templateUrl: 'views/userprofile.html',
      controller: 'UserController'
    }
  );
  
  $routeProvider.otherwise(
    {
      redirectTo: "/Start"
    }
  );
  
}]);