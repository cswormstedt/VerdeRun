var express = require('express');
var router  = express.Router();
var User 	= require('../models/User');
var bcrypt  = require('bcryptjs');


router.get('/start', function(req, res){
	console.log("user get");
	res.render('start', {});
});

router.post('/start', function(req, res){
	console.log(req.body);
	
	//first query the database and find the user
	User.findOne({username: req.body.username}, function(err, user){
		//if there is a user then unhash their password
		if(user){

			bcrypt.compare(req.body.password, user.password, function(err, match){
				//this function returns true or false
				if(match === true){
					//set the session and direct to whatever
					req.session.username   = user.username;
					req.session.userId     = user.id;
					req.session.isLoggedIn = true;

					res.redirect('/home');
				}
				else{
					//send them a message wrong username or password
					res.render('start', {message: 'username or password incorrect'})
				}
			})
		}
		//this is for the orignal if
		else {
			res.render('start', {message: 'username or password was incorrect'})
		}
	})
})
//for /register to work need /user/register in url
// router.get('/register', function(req, res){
// 	res.render('register', {});
// });

router.post('/register', function(req, res){
	//checking the database to see if there is already a username,
	//that matches req.body.username
	console.log(req.body)
	User.findOne({username: req.body.username}, function(err, user){
		console.log(user, req.body.username, ' this is user from database');
		if(user === null){
			//want to register//create salt and hash
			bcrypt.genSalt(10, function(err, salt){
				//created salt now create hash
				bcrypt.hash(req.body.password, salt, function(err, hash){
					//hash is created need to save use id
					var userDbEntry = {};
					userDbEntry.username = req.body.username;
					userDbEntry.password = hash;

					//now can use model to creat entry
					User.create(userDbEntry, function(err, user){
						if(user){
							//if user created, make session
							req.session.username   = user.username;
							req.session.userId 	   = user.id;
							req.session.isLoggedIn = true;

							//redirect to home
							res.redirect('/profile');
						}
						else{
							res.send('there was an error');
						}
					})
				})
			})
		}
		else{
			//send message that username is taken
			res.render('start', {loginmessage: 'username is taken'})
		}
	})
});



router.get('/logout', function(req, res){
	req.session.destroy(function(err){
		res.redirect('/user/start')
	})
})


module.exports = router;