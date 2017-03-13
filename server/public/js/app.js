console.log('yo');
//weather api ajax

$.ajax({
	url: 'https://api.darksky.net/forecast/48fa37f6c40f1efed51b97ee6b3d4671/39.6403,-106.3742',
	type: 'GET',
	dataType: 'json',

	succes: function(data){
		console.log(data);
		
	},

	error: function(error){
	console.log(error)
  },

})''