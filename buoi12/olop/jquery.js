$(document).ready(function($) {
	var text = $('#text');
	console.log(text.parent());//lay cha truc tiep
	console.log(text.parents());//lay tat ca cha 
	console.log(text.parents('body'));//lay cha laf body
	console.log(text.parentsUntil('body'));//lay tat ca cha cho den body
	var myDiv = $('.container');
	console.log(myDiv.find('.text1'))//tim the co cl text1 trong .container
	var text2 = $('.text2');
	console.log(text2.prev());//the truoc the .text2
	console.log(text2.next());//the sau the text2
	console.log(text2.siblings());//the anh em cua texxt2
	console.log(text2.siblings('.text4'));//the anh em co ten text5

	console.log($('p').first());
	console.log($('p').last());
	console.log($('p').eq(1));
	console.log($('.text2').siblings().filter('p'));
	console.log($('.text2').siblings().not('p'));

	// $('.myDiv').hide(); // = .css('display','none');
	// $('div2').show(); // = .css('display','block');
	$('button').on('click', function() { //function nay chay sau khi click 5s
		$('.myDiv').toggle(5000,function(){// fucntion nay chay sau khi hinh mau do chay 5s
			$('.div2').toggle(5000,function(){ //function nay chay sau khi hinh mau xanh an di trong 5s
				alert('da xong');//chay khi da xong 2 function kia
			});
		})
	});
	// $('.div2').fadeIn(10000);//ro dan roi hien ra
	// $('.myDiv').fadeOut(10000);//mo dan roi bien mat
	// // $('.myDiv').fadeOut(10000,0.5);
	// $('.div2').slideDown(4000);//hien thi bang cach tang height
	// $('.myDiv').slideUp(4000);//an di bang cach giam height
});