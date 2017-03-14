var express = require('express');
var router 	= express.Router();
var mountain = require('../models/Mountain.js');
var User = require('../models/User');


router.get('/', function(req, res){
	if(req.session.isLoggedIn){
		mountain.find(function(err, mountains){
			res.render('home', {mountainsArray: mountains, username: req.session.username});
		})
	}
	else {
		res.redirect('/user/start');
	}
});

router.post('/:id', function(req, res){
	var id =  req.body;
	console.log(req.body);
	User.favoriteMountain.push(id);
	user.save();
	res.redirect('/profile')

})








module.exports = router;