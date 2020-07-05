
// var element = document.getElementById('myText');
// console.log(element);
// var contentHTML = element.innerHTML;
// console.log(contentHTML);
// var elements = document.getElementsByClassName('content');
// console.log(elements[0]);
// console.log(elements[1]);
// console.log(elements[2]);
// console.log(elements);
// var element2 = document.getElementById('linkFb');
// console.log(element2.href);
// element2.style.color = 'blue';
// element2.style.fontSize = '30px';
// function buttonClick(){
// 	element2.style.fontSize = '50px';
// }
// var button = document.getElementById('button');
// button.addEventListener('click',buttonClick);

function mouseover(element){
	element.style.color = "blue";
}
function mouseout(element){
	element.style.color = "yellow";
}
function loadPage(){
	alert('Trang web dang duoc tai');
}
function onclick(){
	this.style.color = 'green';
}
function onblurTest(element){
	var x = element.value;
	x = x.toUpperCase();
	element.value = x;
}
function onfocusTest(element){
	element.style.background = 'red';
}
function funcSub (){
	alert('Ban dang submit');
}
var haha1 = document.getElementById('haha1');
console.log(haha1.parentNode);
console.log(haha1.children);

var haha = document.getElementById('haha');
console.log(haha.firstElementChild);

function getValue(){
	alert(document.frm.name.value);
	alert(document.frm.pass.value);
	alert(document.frm.area.value);
		}





<div class="section" style="display: ">
			<div class="section1">Section1</div>
			<div class="section2">Làm 1 thanh menu với 3 tab chính, trong 3 tab  đó có các mục nhỏ hơn. Ban đầu các mục nhỏ ẩn đi, khi click vào tab chính nào thì mục nhỏ tương ứng trượt ra.</div>
		</div>
		<div class="section" style="display: ">
			<div class="section1">Section1</div>
			<div class="section2">Làm 1 thanh menu với 3 tab chính, trong 3 tab  đó có các mục nhỏ hơn. Ban đầu các mục nhỏ ẩn đi, khi click vào tab chính nào thì mục nhỏ tương ứng trượt ra.</div>
		</div>