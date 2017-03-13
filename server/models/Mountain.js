var mongoose = require('mongoose');

var mountainSchema = new mongoose.Schema({
	name: String,
	state: String,
	trails: {
		number: Number,
		open: Number,
		closed: Number
	},
	conditions: String,
	nightlife: {
		bars:{name: String, type: String, address: String},
		restaurants: {name: String, type: String, address: String}
	},
})

var mountainModel = mongoose.model('Mountain', mountainSchema);

module.exports = mountainModel;