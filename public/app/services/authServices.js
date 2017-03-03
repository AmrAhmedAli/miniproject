angular.module('authServices', [])

.factory('Auth', function($http,AuthToken){
	var authFactory = {};

	authFactory.login = function(loginData){
		return $http.post('/api/authenticate', loginData).then(function(data){
			console.log(data.data.token);			
			AuthToken.setToken(token);
			return data;
});
};
	//Auth.isLoggedIn();
	authFactory.isLoggedIn = function(){
		if(AuthToken.getToken()){return true;}
		else{return false;}
};
	return authFactory;
})

.factory('AuthToken', function($window){
	var authTokenFactory = {};
	//AuthToken.setToken(token);
	authTokenFactory.setToken = function(token){
	$window.localStorage.setItem('token', token);
	
	};
	//AuthToken.getToken();
	authTokenFactory.getToken = function (){
	return $window.localStorage.getItem('token');
};
	return authTokenFactory;


});
