var mongoose = require('mongoose');

var mountianSchema = new mongoose.Schema({
	name: String,
	state: String,
	trails: {
		number: Number,
		open: Number,
		closed: Number
	},
	conditions: String,
	nightlife: {
		bars:{[name: String, type: String, address: String]},
		restaurants: {[name: String, type: String, address: String]}
	},
})

var mountianModel = mongoose.model('Mountain', mountianSchema);

module.exports = mountianModel;