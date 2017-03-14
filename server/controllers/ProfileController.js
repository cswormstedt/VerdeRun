var express = require('express');
var router 	= express.Router();
var mountain = require('../models/Mountain.js');




router.get('/', function(req, res){
	if(req.session.isLoggedIn){
		res.render('profile', {username: req.session.username});
	}
	else {
		res.redirect('/user/start');
	}
});

router.post('/', function(req,res){
		console.log('hiiii');
		mountain.find(function(err, mountains){
		res.render( 'profile', {mountainsArray: mountains});	
		});
	

	});


module.exports = router;