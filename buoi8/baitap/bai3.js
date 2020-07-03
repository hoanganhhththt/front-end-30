var n = prompt('nhap n :');
var tong = 0;
var tich =1;
for(let i=1;i<=n;i++){
	tich*=i;
	tong += (i/tich);
}
alert('Tổng là: '+tong);