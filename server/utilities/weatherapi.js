var https = require('https');


function printError(error){
  console.error("Got error:" + error.message)
}

function getWeather(favoriteMountain, fn){
  
  for(i = 0; i < favoriteMountain.length; i++){
    
    runReq(favoriteMountain[i], favoriteMountain.length, fn);

    //lat long of fav mountain 
    //run request for that mountain
    // 
  }
}


function runReq(favoriteMountain, mountainsLength,fn){

  // var weatherArray = [];
  var latitude = favoriteMountain.latitude;
  var longitude = favoriteMountain.longitude;
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
        favoriteMountain.weather = {current: weather.currently.summary, temp: weather.currently.temperature, icon: weather.currently.icon};
        //dont call this line until the loop hits the end of favorite
        fn([favoriteMountain]);
      }
      else {
        printError({message:  "There was an error getting the weather for chicago, there was a status code of " + http.STATUS_CODES[response.statusCode]})
      }
  })
})
  request.on("error", printError);
}







module.exports.get = getWeather;