var slide = document.getElementsByClassName('slide');
var sizeSlide = slide[0].clientWidth;
var chuyen = 0;
var chuyenslide1 = document.getElementById('chuyenslide1');
var img = chuyenslide1.getElementsByTagName('img');
var max = sizeSlide*img.length;
max = max - sizeSlide;
var vuong = document.getElementsByClassName('vuong');
var dem = 0;
function opa05 (){
	for(let i=0;i<img.length;i++){
		vuong[i].style.opacity =0.5;
	}
}
function nextright (){
	if(chuyen < max) {chuyen += sizeSlide;dem++}
	else {chuyen = 0;dem=0}
	chuyenslide1.style.marginLeft = '-' + chuyen + 'px';
	opa05();
	vuong[dem].style.opacity = 1;

}
function nextleft (){
	if(chuyen == 0) {chuyen = max;dem=img.length-1;}
	else {chuyen -= sizeSlide;dem--}
	chuyenslide1.style.marginLeft = '-' + chuyen + 'px';
	opa05();
	vuong[dem].style.opacity = 1;
}
setInterval(function (){
	nextright();
},10000);
function clickthe(){
	var chuyen1;
	for (var i = vuong.length - 1; i >= 0; i--) {
		if(vuong[i] == this){
			console.log(vuong[i]);
			chuyen = i*1000;
			vuong[i].style.opacity = 1;
			chuyenslide1.style.marginLeft = '-' + chuyen1 + 'px';
		}
	}
}
