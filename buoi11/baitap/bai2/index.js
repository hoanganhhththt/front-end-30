$(document).ready(function(){
	var menu = $('.menu');
	console.log($('.menu').text());
	$('.menu').click(function() {
		if($(this).text()=='+'){
			$(this).text('-');
			$(this).parent().next().css('display','block');
		}
		else {
			console.log($(this).text());	
			$(this).text('+');
			console.log($(this).text());
			$(this).parent().next().css('display','none');
		}
	});
});	