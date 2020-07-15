$(document).ready(function() {
	$('#add').click(function() {
		var text = $('#input').val();
		console.log(text);
		if(text == ''){
			alert('Nhập lại')
		}else {
			$('.container').after('<div class="add1"></div>');
			$('.container').next().text(text);
			$('.add1').append('<div class="add-x">x</div>');
		}
		$('#input').val('');	
	});
	$(document).on('click', '.add-x', function() {
		$(this).parent().remove();
	});	
	$(document).on('click', '.add1', function() {
		$(this).css('text-decoration','line-through');
		$(this).prepend('<div class="add-v">&#62</div>');
		$(this).children().css('background-color', 'green');
		$(this).css('background-color', 'green');
		$(this).css('color', 'gray');
	});
	console.log($('.add-x').parent());
});