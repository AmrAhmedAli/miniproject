angular.module('portfolioControllers',[])

.controller('portCtrl', function($http,$location){
	
	var app = this;
	this.regPort = function(regData){
		app.error = false;
		console.log('Done');
		$http.post('/api/portfolio', this.regData).then(function(data){
			console.log(data);
			if(data.data.success){
				app.error = data.data.message;
				//$location.path('/about');
			}else{
				app.error = data.data.message;
			}

});

};
	this.visitPort = function(){
		$location.path('/visitor');
	};
	
});


