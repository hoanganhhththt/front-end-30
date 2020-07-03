var m = prompt('Nhập M:');
var n = prompt('Nhập N:');
var k = prompt('Nhập K:');
var tong = 0;
for(let i = n;i<=m;i++){
	if(i%k==0){
		tong+=i;
	}
}
alert(tong);