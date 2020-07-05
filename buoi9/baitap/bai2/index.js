function mouseoverTest(element){
	element.style.backgroundColor = 'green';
}
function mouseoutTest(element){
	element.style.backgroundColor = 'blue';
}
var x = document.getElementsByClassName('main1');
function clickall(){
	for(let i = 0; i<x.length; i++){
		x[i].checked = 'checked';
	}
}
function deleteall(){
	for(let i = 0; i<x.length; i++){
		x[i].checked = '';
	}
}