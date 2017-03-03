angular.module('visitorControllers',[]).controller('visitCtrl',function($scope, $http){
console.log('dadas');	
$http.get('/api/portfolio').then(function(response){console.log('done'); $scope.portfolio = response.data;});
	
});
