var elements = document.getElementsByClassName('section');
var lielement = document.getElementsByClassName('lielement');
function noneAll() {
	for(let i = 0; i<elements.length ; i++){
		elements[i].style.display = 'none';
		lielement[i].style.backgroundColor = 'gray';
		lielement[i].style.color = 'white';
	}
}

function clickTest(element) {
	noneAll();
	element.style.backgroundColor = 'white';
	element.style.color = 'black';
	var x = element.id;
	var y = x.substring(3,4);
	elements[y].style.display = 'block';
}
