var express = require('express');
var app 	= express();
var server  = require('http').createServer(app);
var path 	= require('path');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(session({
	secret: "I'm not a businessman, I'm a business, man.",
	resave: false,
	saveUninitialized: true,
	cookie: {secure: false}
}));

//database
// require('./db/db');

app.use(express.static(path.join(__dirname, 'public')));


server.listen(3000, function(){
	console.log("listening on port 3000");
})