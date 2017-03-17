var User 	 = require('../models/User');
var mongoose = require('mongoose');
var weather  = require('../utilities/weatherapi.js');


var skyconType = function(favoriteMountainArray) {
  if(this.icon === 'rain'){
    $('.weather-icon').attr('src', '../images/SVG/Cloud-Rain.svg');
  }else if(this.icon === 'snow'){
    $('.weather-icon').attr('src', '../images/SVG/Snowflake.svg');
  }else if(this.icon === 'sleet'){
    $('.weather-icon').attr('src', '../images/SVG/Cloud-Drizzle.svg');
  }else if(this.icon === 'hail'){
    $('.weather-icon').attr('src', '../images/SVG/Cloud-Hail.svg');
  }else if(this.icon === 'wind'){
    $('.weather-icon').attr('src', '../images/SVG/Wind.svg');
  }else if(this.icon === 'fog'){
   $('.weather-icon').attr('src', '../images/SVG/Cloud-Fog.svg');
  }else if(this.icon === 'cloudy'){
    $('.weather-icon').attr('src', '../images/SVG/Cloud.svg');
  }else if(this.icon === 'partly-cloudy-day'){
    $('.weather-icon').attr('src', '../images/SVG/Cloud-Sun.svg');
  }else if(this.icon === 'partly-cloudy-night'){
    $('.weather-icon').attr('src', '../images/SVG/Cloud-Moon.svg');
  }else if(this.icon === 'clear-day'){
    $('.weather-icon').attr('src', '../images/SVG/Sun.svg');
  }else if(this.icon === 'clear-night'){
    $('.weather-icon').attr('src', '../images/SVG/Moon-First-Quarter.svg');
  }else {
  	$('.weather-icon').attr('src', '../images/SVG/Shades.svg');
 };


 module.exports = skyconType;
