var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PortfolioSchema = new Schema({
	email: { type: String, lowercase:true, required: true, unique:true},
	sname: { type: String, required: true},
	displayPic: {type: String},
	work: {type: String, required: true}

});

module.exports = mongoose.model('Portfolio',PortfolioSchema);
