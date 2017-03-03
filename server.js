var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/api', appRoutes);


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/project',function(err){
	if(err){
		console.log('Cannot connect to the database' + err);
	}else{
		console.log('Connected to the database');
	}
});

app.get('*', function(req,res){
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});




app.listen(8080, function(){
	console.log('Runnin');

});
