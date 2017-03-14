var express = require('express');
var router 	= express.Router();
var mountain = require('../models/Mountain.js');





router.get('/', function(req, res){
	if(req.session.isLoggedIn){
		res.render('profile', {username: req.session.username, favoriteMountain: req.body.favoriteMountain});
	}
	else {
		res.redirect('/user/start');
	}
});

router.post('/', function(req,res){
	console.log(req.body, ' this is post route for id');
	// User.favoriteMountain.push(id);
	// user.save();
	res.send('hi')
});
	

module.exports = router;