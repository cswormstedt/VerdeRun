var express = require('express');
var router 	= express.Router();
var mountain = require('../models/Mountain.js');
var User = require('../models/User');
var mongoose = require('mongoose')
var weather = require('../utilities/weatherapi.js');



router.get('/', function(req, res){
	console.log(weather.get(), ' this is weather')

	
	if(req.session.isLoggedIn){

		var userId = req.session.userId;
		console.log(req.session.userId)
		User.findById(userId).populate('favoriteMountain').exec(function(err, user){
		
		res.render('profile', {username: req.session.username, favoriteMountainArray: user.favoriteMountain});
	})

		// , current: weather.currently.summary, temp: weather.currently.temperature, icon: weather.currently.icon }

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
		res.render('profile', {favoriteMountain: []})

	});


});

router.delete('/:id', function(req, res){
	var id = req.params.id;
	var userId = req.session.userId;
	User.findById(userId, function(err, user){
	user.favoriteMountain.pull(id);
	user.save();
	console.log(user);
	res.send('success');
	});

})





module.exports = router;