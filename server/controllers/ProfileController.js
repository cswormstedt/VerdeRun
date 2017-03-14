var express = require('express');
var router 	= express.Router();
// var mountain = require("../models/Mountain");
// var mountainJson = require('../js/moutain.json')

router.get('/', function(req, res){
	if(req.session.isLoggedIn){
		res.render('profile', {username: req.session.username});
	}
	else {
		res.redirect('/user/start');
	}
})


module.exports = router;