console.log('yo');
//weather api ajax
var response = {};

$(document).on('ready', function(){
    $(".accordion").accordion();
});


$('.signUpOne').on('click',function(e){
	console.log('click');
	$('.modalHide').toggleClass('register-modal');
	$('.signUpOne').hide();
});


$('.place').on('click', function(e){
	var mountainName = $(e.target).parent();
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




$('.signUpExit').on('click', function(e){
	console.log('click');
	$('.modalHide').removeClass('register-modal');
	$('.signUpOne').show();
})


