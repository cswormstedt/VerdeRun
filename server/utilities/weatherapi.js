var https = require('https');


function printError(error){
  console.error("Got error:" + error.message)
}

function getWeather(){
  var latitude  = 39.637642;
  var longitude = -106.363204;

  var request =  https.get('https://api.darksky.net/forecast/8df1e8974b0d890b106b95d0a8943732/' + latitude + ',' + longitude, function(response){
  console.log("Got Response" + response.statusCode)
  var body = " "
  response.on('data', function(chunk){
    // console.log('BODY: ' + chunk)
    body += chunk;

  })

  response.on('end', function(){
    if(response.statusCode === 200){

        var weather = JSON.parse(body)
        console.log("The weather is currently " + weather.currently.summary + " with a temperature of " + weather.currently.temperature + " with windspeeds at " + weather.currently.windSpeed + "mph ");
        var profileWeather = { current: weather.currently.summary, temp: weather.currently.temperature, icon: weather.currently.icon}

      }
      else {
        printError({message:  "There was an error getting the weather for chicago, there was a status code of " + http.STATUS_CODES[response.statusCode]})
      }
  })
})
  request.on("error", printError);
}




module.exports = getWeather;