var chuoi = '';
for(let i=1;i<=7;i++){
	chuoi+='*';
	document.writeln("<br>",chuoi);
}
var chuoi2= '*******';
for(let i=1;i<=7;i++){
	document.writeln("<br>",chuoi2);
}
for(let i=1;i<=7;i++){
	if(i==1||i==7){
		document.writeln("<br>",chuoi2);
	} else {
		document.writeln("<br>",'*'+'&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'+'*');
	}
}
var chuoi3 = '*******';
for(let i=1;i<=7;i++){
	switch(i){
		case 1:
		document.writeln("<br>",'*******');
		break;
		case 2:
		document.writeln("<br>",'******');
		break;
		case 3:
		document.writeln("<br>",'*****');
		break;
		case 4:
		document.writeln("<br>",'****');
		break;
		case 5:
		document.writeln("<br>",'***');
		break;
		case 6:
		document.writeln("<br>",'**');
		break;
		case 7:
		document.writeln("<br>",'*');
		break;
	}
}
