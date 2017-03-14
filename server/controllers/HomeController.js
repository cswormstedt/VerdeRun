var express = require('express');
var router 	= express.Router();
var mountain = require('../models/Mountain.js');


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










module.exports = router;