var _name2=/^([A-Za-z\s*]{5,20})$/;
var _sdt2=/^(0)([3||9]{1,})([0-9]{8})$/;
function dang_ki(){
	if(!_name2.test(_name1.value)){
		alert('Họ tên không đúng cú pháp');
		return false
	}
	if (!_sdt2.test(_sdt1.value)) {
		alert('Số điện thoại không đúng cú pháp');
		return false
	}
};
// Đăng nhập
// var _email1=/^([admin@gmail.com]{1,})$/;
// var _pass1=/^([admin]{1,})$/
// function dang_nhap(){
// 	if(!_email1.test(_email.value)){
// 		alert('Tài khoản không đúng');
// 		return false;
// 	}
// 	if (!_pass1.test(_pass.value)) {
// 		alert('Password không đúng');
// 		return false;
// 	}
// 	if (_email1(_email.value)) {
// 		return true;
// 	}
// 	if (_pass1(_pass.value)) {
// 		return true;
// 	}
// }

$('form.form_validate_dn').validate({
		rules:{
			_email:{
				required:true,
				email:true
			},
			_pass:{
				required:true,
			},

		},
		messages:{
			_email:{
				required:"Vui lòng nhập email",
				email:"Vui lòng nhập đúng định dạng email VD: abc123@gmail.com"
			},
			_pass:{
				required:"Vui lòng nhập mật khẩu",
			},
		}	
});
$('form.form_validate_dk').validate({
		rules:{
			_name:{
				required:true,
				minlength:5,
				maxlength:30
			},
			_sdt:{
				required:true,
			},
			_address:"required",
			_date:{
					required:true,
			},
			_email:{
				required:true,
				email:true
			},
			_pass:"required",
			_repass:{
				required:true,
				equalTo:'#_pass'
			}

		},
		messages:{
			_name:{
				required:"Vui lòng nhập họ và tên",
				minlength:"Họ và tên phải có ít nhất 5 kí tự",
				maxlength:"Họ và tên không quá 30 kí tự"
			},
			_sdt:{
				required:"Vui lòng nhập số điện thoại của bạn vào",

			},
			_address:"Vui lòng nhập địa chỉ của bạn",
			_date:{
				required:"Vui lòng điền ngày sinh của bạn",
			},
			_email:{
				required:"Vui lòng nhập email",
				email:"Vui lòng nhập đúng định dạng email VD: abc123@gmail.com"},
			_pass:"Vui lòng nhập mật khẩu",
			_repass:{
				required:"Vui lòng nhập lại mật khẩu",
				equalTo:"Mật khẩu không khớp với mật khẩu đã nhập"
			},
		},	
});
// Form đặt hàng
$('form.form_validate_dh').validate({
		rules:{
			_name:{
				required:true,
				minlength:5,
				maxlength:30
			},
			_sdt:"required",
			_email:{
				required:true,
				email:true
			},
			_address:"required",

		},
		messages:{
			_name:{
				required:"Vui lòng nhập họ và tên",
				minlength:"Họ và tên phải có ít nhất 5 kí tự",
				maxlength:"Họ và tên không quá 30 kí tự"
			},
			_sdt:"Vui lòng nhập email",
			_email:{
				required:"Vui lòng nhập email",
				email:"Vui lòng nhập đúng định dạng email VD: abc123@gmail.com"
			},
			_address:"Vui lòng nhập địa chỉ của bạn",

		}	
});
// Form liên hệ
$('form.form_validate_lh').validate({
		rules:{
			_name:{
				required:true,
				minlength:5,
				maxlength:30
			},
			_sdt:"required",
			_email:{
				required:true,
				email:true
			},
			_note:"required",

		},
		messages:{
			_name:{
				required:"Vui lòng nhập họ và tên",
				minlength:"Họ và tên phải có ít nhất 5 kí tự",
				maxlength:"Họ và tên không quá 30 kí tự"
			},
			_sdt:"Vui lòng nhập email",
			_email:{
				required:"Vui lòng nhập email",
				email:"Vui lòng nhập đúng định dạng email VD: abc123@gmail.com"
			},
			_note:"Vui lòng nhập lí do của bạn",

		}	
});
var _ten2=/^([A-Za-z\s*]{5,20})$/;
var _phone2=/^(0)([3||9]{1,})([0-9]{8})$/;
function gui_lh(){
	if(!_ten2.test(_ten.value)){
		alert('Họ tên không đúng cú pháp');
		return false
	}
	if (!_phone2.test(_phone.value)) {
		alert('Số điện thoại không đúng cú pháp');
		return false
	}
};