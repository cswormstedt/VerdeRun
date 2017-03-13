var mongoose = require('mongoose');

var UserSChema = new mongoose.Schema({
	username: String,
	password: String,
	email: String,
});

module.exports = mongoose.model('User', UserSChema)