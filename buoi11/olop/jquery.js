$(document).ready(function() {
	console.log('Hello');
});
$(document).ready(function() {
	var text = $('h1');
	text.css('color','red');
	var textById = $('#name');
	console.log(text);
	var textByClass = $('.main');
	console.log(text);
	var text = $('h1.main');
	console.log(text);
	var text = $('h1#name');
	console.log(text);
	var input1 = $(':text');
	var input2 = $(':password');
	var input3 = $(':radio');
	console.log(input1,input2,input3);
	console.log(textByClass.text());
	console.log(textById.text('Le Hoang Anh'));
	console.log($('.container').html());
	console.log(input1.val());
	console.log(input1.val('haha'));
	textById.css('font-size','50px');
	console.log(textById.css('font-size'));
	console.log($('.container').width());
	console.log($('.container').innerWidth());
	console.log($('.container').height());
	console.log($('.container').innerHeight());
	$('.container').width(700);
	//=====================================================================
	$('p').remove(); // Loai bo element xac dinh
	// $('.container').empty();  lamf trong ca the trong documnet
	$('.container').append('<h2 class="my-text-h2">Append: Web Front End 30</h2>');
	$('.container').append('<h2 class="my-text-h2">Append: Web Front End 29</h2>');
	$('.container').prepend('<h2>PrePend: Web Front End 30</h2>');
	$('.container').before('<h2>Before: Web Front End 30</h2>');
	$('.container').after('<h2>After: Web Front End 30</h2>');
	$('.container').after('<h2>After: Web Front End 31</h2>');
	$('.container').addClass('class1');
	// $('container').removeClass('class2');//xoa class 2;
	$('.container').toggleClass('class2');
	// co class 2 toi thi no xoa ma chuwa co thi no them vao
	$('#myButton').click(function() {
		$('.container').empty();
	});
	$('#myButton').change(function() {
		$('.container').empty();
	});
	// $('#myButton').on('change click',function() {
	// 	$('.container').empty();
	// });
	$(document).on('click change',':text',function(){
		console.log('Xin chao');
	});
	$('.my-text-h2').on('click', function(){
		$(this).css('color','blue');
	});//khong duoc vi the h2 nay tao ra qua jquery 
	$(document).on('click','.my-text-h2',function(){
		$(this).css('color','red');
	})
});