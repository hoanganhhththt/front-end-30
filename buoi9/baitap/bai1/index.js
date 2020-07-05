var elements = document.getElementsByClassName('section');
var li1 = document.getElementById('li1');
var li2 = document.getElementById('li2');
var li3 = document.getElementById('li3');
function noneAll() {
	elements[0].style.display = 'none';
	elements[1].style.display = 'none';
	elements[2].style.display = 'none';
	li1.style.backgroundColor = 'gray';
	li1.style.color = 'white';
	li2.style.backgroundColor = 'gray';
	li2.style.color = 'white';
	li3.style.backgroundColor = 'gray';
	li3.style.color = 'white';
}
function click1() {
	noneAll();
	elements[0].style.display = 'block';
	li1.style.backgroundColor = 'white';
	li1.style.color = 'black';
}
function click2() {
	noneAll();
	elements[1].style.display = 'block';
	li2.style.backgroundColor = 'white';
	li2.style.color = 'black';
}
function click3() {
	noneAll();
	elements[2].style.display = 'block';
	li3.style.backgroundColor = 'white';
	li3.style.color = 'black';
}