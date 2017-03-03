  angular.module('studentControllers',[]).controller('regCtrl', function($http,$location){
var app =this;
	this.regStudent = function(regData){
	app.error = false;
		console.log('submitted');
		$http.post('api/students',this.regData).then(function(data){
			console.log(data.data.success);
			console.log(data.data.message);
			if (data.data.success){
				app.error = data.data.message;
				$location.path('/');
			}else{
				app.error = data.data.message;
			}
		
});

			};



});
