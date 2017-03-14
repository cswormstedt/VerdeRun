var mongoose = require('mongoose');

var UserSChema = new mongoose.Schema({
	username: String,
	password: String,
	email: String,
	favoriteMountain: [{type: mongoose.Schema.Types.ObjectId, ref: 'Mountain'}]
});

module.exports = mongoose.model('User', UserSChema)