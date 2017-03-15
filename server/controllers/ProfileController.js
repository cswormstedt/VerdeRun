var express = require('express');
var router 	= express.Router();
var mountain = require('../models/Mountain.js');
var User = require('../models/User');
var mongoose = require('mongoose')



router.get('/', function(req, res){
	if(req.session.isLoggedIn){
		res.render('profile', {username: req.session.username, favoriteMountain: req.body.favoriteMountain});
	}
	else {
		res.redirect('/user/start');
	}
});
//this is on profile page and should be able to but it render into a hbs
router.post('/', function(req,res){
	

	var mountainId = req.body.mountainId

	var mountain =	mountainId
	console.log(mongoose.Types.ObjectId.isValid(mountainId), ' this is mid')
	
	console.log(req.body, ' this is post route for id');
	var userId = req.session.userId
	User.findById(userId, function(err, users){
		console.log(userId);
		console.log(users.favoriteMountain, ' this is user mountain')
	// User.find({favoriteMountain: 'Mountain'}).populate(mountainId);
		users.favoriteMountain.push(mountain);
		users.save();
		res.send('hi')
	})
	//
	
});
	

module.exports = router;