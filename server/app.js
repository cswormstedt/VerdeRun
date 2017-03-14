var express = require('express');
var app 	= express();
var server  = require('http').createServer(app);
var path 	= require('path');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var https = require('https');


require('./db/db');

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(session({
	secret: "I'm not a businessman, I'm a business, man.",
	resave: false,
	saveUninitialized: true,
	cookie: {secure: false}
}));


app.use(express.static(path.join(__dirname, 'public')));

var userController = require('./controllers/UserController');
var homeController = require('./controllers/homeController');
var profileController = require('./controllers/ProfileController');


app.use('/user', userController);
app.use('/home', homeController);
app.use('/profile', profileController);



var LATITUDE = 39.637642;
    LONGITUDE =  -106.363204;

function printError(error){
  console.error("Got error:" + error.message)
}

function getWeather(){
var request =  https.get('https://api.darksky.net/forecast/8df1e8974b0d890b106b95d0a8943732/39.637642,-106.363204', function(response){
  console.log("Got Response" + response.statusCode)
  var body = " "
  response.on('data', function(chunk){
    console.log('BODY: ' + chunk)
    body += chunk;

  })

  response.on('end', function(){
    if(response.statusCode === 200){

        var weather = JSON.parse(body)
        console.log("The weather is currently " +weather.currently.summary + " with a temperature of " + weather.currently.temperature + " with windspeeds at " + weather.currently.windSpeed + "mph ");
      }
      else {
        printError({message:  "There was an error getting the weather for chicago, there was a status code of " + http.STATUS_CODES[response.statusCode]})
      }
  })
})
  request.on("error", printError);
}



module.exports.get = getWeather;













server.listen(3000, function(){
	console.log("listening on port 3000");
})