var express = require('express');
var router 	= express.Router();

router.get('/', function(req, res){
	if(req.session.isLoggedIn){
		res.render('home', {username: req.session.username},{})
	}
	else {
		res.redirect('/user/start');
	}
})


module.exports = router;