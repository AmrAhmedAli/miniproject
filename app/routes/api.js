var Student = require('../models/user');
var Portfolio = require('../models/portfolio');
var jwt = require('jwt-simple');
var secret = 'amrr';


module.exports = function(router) {
	router.post('/students', function(req,res){
	var student = new Student();
	student.username = req.body.username;
	student.password = req.body.password;
	student.save(function(err){
		if(err){
			res.json({success: false, message: 'Cannot Create Student' });
		}else{
			res.json({success: true, message:'Student succesfully registered'});
			}
		});
	});


	router.post('/authenticate', function(req,res){
		Student.findOne({username: req.body.username}).select('username password').exec(function(err, student){

		if (err) throw err;
		if(!student){
			res.json({success: false, message: 'no such user'});
		}else{
			if(req.body.password){
				var validPassword = student.comparePassword(req.body.password);
			}
			else{
				res.json({success: false, message: 'Please enter a password'});
			}
			if(!validPassword){
				res.json({success: false, message: 'Enter a correct Password'});
			}
			else{
			var token = jwt.encode(student.username, secret);
			return res.json({success: true, message: 'Login Success', token: token});
			}
		}
});

});
	
	router.post('/portfolio', function(req,res){
	var portfolio = new Portfolio();
	portfolio.email = req.body.email;
	portfolio.sname = req.body.sname;
	portfolio.displayPic = req.body.displayPic;
	portfolio.work = req.body.work;
	if(req.body.sname == null || req.body.sname == "" || req.body.work == null || req.body.work == "" || 		  req.body.email == null || req.body.email == ""){
		res.json({success: false, message: 'You name, work, and email are required!' });
	}else{
		portfolio.save(function(err){
		if (err){
			res.json({success: false, message: 'You Have ALready Created A Portfolio Before' });
		}else{
			res.json({success: true, message: 'Portfolio Created' });
		}
});
	}
	
});
	router.get('/portfolio', function(req, res){
	console.log('You want some thing form portfolio');
	Portfolio.find(function(err, docs){
		console.log(docs);
		res.json(docs);		
	});
});

	return router;
}
