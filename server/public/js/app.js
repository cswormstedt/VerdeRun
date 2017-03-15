console.log('yo');
//weather api ajax
var response = {};


$('.place').on('click', function(e){
	var mountainName = $(e.target).parent().parent();
	var id = mountainName.data('id');
	console.log(id);

	var favId = {mountainId: id}
	

	$.ajax({
		url: '/profile',
		type: 'POST',
		data: favId,
		success: function(res){
			console.log(res);
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


//////////////////
////weather api///
//////////////////

$.ajax({
	url: '',
	type: 'GET',
	dataType: 'json',
})





