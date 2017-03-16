var mongoose = require('mongoose');

var mountainSchema = new mongoose.Schema({
	name: String,
	state: String,
	img: String,
	trails: {
		number: Number,
		open: Number,
		closed: Number
	},
	conditions: String,
	nightlife: {
		bars:[],
		restaurants: []
	},
})

var mountainModel = mongoose.model('Mountain', mountainSchema);

module.exports = mountainModel;