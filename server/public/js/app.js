console.log('yo');


$('.place').on('click', function(e){
	var mountainName = $(e.target).parent().parent();
	var id = mountainName.data('id');
	console.log(id);
	console.log(e + " this is the event");
	var favId = {mountainId: id}
	

	$.ajax({
		url: '/profile',
		type: 'POST',
		data: favId,
		success: function(res){
			console.log(favId);
		},
		error: function(err){
			console.log(err);
		}
	})
});

/////////////////
/////sign in/////
/////////////////

$('.signUpOne').on('click',function(e){
	console.log('click');
	$('.modalHide').toggleClass('register-modal');
	$('.signUpOne').hide();
});


$('.signUpExit').on('click', function(e){
	console.log('click');
	$('.modalHide').removeClass('register-modal');
	$('.signUpOne').show();
});





