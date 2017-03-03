angular.module('mainController',['authServices']).controller('mainCtrl', function($http,$location,Auth){
var app = this;

this.doLogin = function(loginData){
app.error = false;
$http.post('api/authenticate', this.loginData).then(function(data){
	console.log(data.data.success);
	console.log(data.data.message);
	console.log(data.data.token);
	if(data.data.success){
		app.error = data.data.message;
		$location.path('/about');
	}else{
		app.error = data.data.message;
}
});

}
this.visitPort = function(){
$location.path('/visitor');
}


});




