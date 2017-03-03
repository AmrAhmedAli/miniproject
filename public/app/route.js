angular.module('AppRoutes', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
	

	$routeProvider.when('/',{templateUrl: 'app/views/pages/register.html', controller: 'regCtrl', controllerAs: 'register'});
	$routeProvider.when('/login',{templateUrl: 'app/views/pages/login.html', controller: 'regCtrl', controllerAs: 'register'});
	$routeProvider.when('/about',{templateUrl: 'app/views/pages/about.html', controller: 'portCtrl', controllerAs: 'portfolio'});
	$routeProvider.when('/visitor',{templateUrl: 'app/views/pages/visitor.html', controller: 'portCtrl', controllerAs: 'portfolio'});
	$routeProvider.when('/visitor',{templateUrl: 'app/views/pages/visitor.html', controller: 'visitCtrl', controllerAs: 'visitor'});
	
});
