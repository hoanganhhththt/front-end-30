var thongbao = document.getElementsByClassName('thongbao');
document.frm.name.addEventListener('change', function() {
        var nameValue = this.value;

        var msg_error = '';

        if (nameValue == '') {
            msg_error = 'Yêu cầu nhập họ và tên';
        }
        else if (nameValue.length < 8) {
            msg_error = 'Độ dài phải hơn 8 ký tự';   
        }
        else {
            msg_error = '';
        }
        console.log(msg_error);
        this.nextElementSibling.innerHTML = msg_error;

    });
document.frm.phonenumber.addEventListener('change', function() {
	var num = this.value;
	var msg_error = '';

    if (num == '') {
            msg_error = 'Yêu cầu nhập số điện thoại';
        }
    else {
    	msg_error = '';
    }
    this.nextElementSibling.innerHTML = msg_error;
});
document.frm.email.addEventListener('change', function() {
	var x = this.value;
	var msg_error = '';
	var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < (atposition + 2)
    || (dotposition + 2) >= x.length) {
        msg_error = "Yêu cầu nhập email";
 	}
    else {
    	msg_error = '';
    }
    this.nextElementSibling.innerHTML = msg_error;
});
document.frm.password.addEventListener('change', function() {
	var x = this.value;
	var msg_error = '';
	if (x == '') {
        msg_error = 'Yêu cầu nhập mật khẩu';
    }
    this.nextElementSibling.innerHTML = msg_error;
});
document.frm.testpass.addEventListener('change', function() {
	var x = this.value;
	var msg_error = '';
	if (x == '') {
        msg_error = 'Yêu cầu xác nhận mật khẩu';
    }
    this.nextElementSibling.innerHTML = msg_error;
});
function test() {
	if(document.frm.name.value == ''||document.frm.email.value == ''||document.frm.phonenumber.value == ''||document.frm.password.value == ''||document.frm.testpass.value == ''||document.frm.testpass.value !== document.frm.password.value){
		alert ('Yêu cầu nhập lại form');
	} else {
		alert('Thành công');
	}
};
function deleteAll(){
	document.frm.name.value == '';
	document.frm.email.value == '';
	document.frm.phonenumber.value == '';
	document.frm.password.value == '';
	document.frm.testpass.value == '';
}