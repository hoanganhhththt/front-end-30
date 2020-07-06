var x = document.getElementById('input1');
function defaultFont(){
	x.style.fontSize = '20px';
}
function plusFont(){
	var a = x.style.fontSize;
	var b =  a.substring(0,a.length-2)*1.4 +'px';
	x.style.fontSize = b;
}
function unplusFont(){
	var a = x.style.fontSize;
	var b =  a.substring(0,a.length-2)*0.6 +'px';
	x.style.fontSize = b;
}