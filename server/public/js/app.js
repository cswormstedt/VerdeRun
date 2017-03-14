console.log('yo');
//weather api ajax
var response = {};



$('.signUpOne').on('click',function(e){
	console.log('click');
	$('.modalHide').toggleClass('register-modal');
	$('.signUpOne').hide();
});


$('.place').on('click', function(e){
	var mountainName = $(e.target).parent();
	var id = mountainName.data('id');
	$.ajax({
		url: '/' + id,
		type: 'Get',
		success: function(res){
			console.log(res);
		},
		error: function(err){
			console.log(err);
		}
	})
});

$.ajax({
	url: '/profile/',
	type: "POST",
	success: function(result){
		console.log("this is the result");
	},
	error: function(err){
		console.log(err);
	}
})




