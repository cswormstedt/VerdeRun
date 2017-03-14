console.log('yo');
//weather api ajax
var response = {};

// $.ajax({
// 	url: 'https://api.darksky.net/forecast/48fa37f6c40f1efed51b97ee6b3d4671/39.6403,-106.3742',
// 	type: 'GET',
// 	dataType: 'json',
<<<<<<< HEAD

// 	succes: function(data){
// 		console.log(data);
		
// 	},

// 	error: function(error){
// 	console.log(error)
//   },

// })''
=======

// 	succes: function(data){
// 		response = data;

		
// 	},

// 	error: function(error){
// 	console.log(error);
//   }

// })

$('.signUpOne').on('click',function(e){
	console.log('click');
	$('.modalHide').toggleClass('register-modal');
	$('.signUpOne').hide();
})
>>>>>>> 7be1bdb75cafe10bab0304866ea5b41d77085430
