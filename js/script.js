
//	Banner silde

$(document).ready(function () {
	$('.banner').slick({
		infinite: true,
		arrows: false,
		//   dots: true,
		slidesToScroll: 1,
		slidesToShow: 1,
		speed: 600,
		cssEase: 'ease-in-out',
		autoplay: true,
		autoplaySpeed: 2000
	});

});










//$('.proList_row').slick({
//  dots: false,
//  infinite: true,
//  arrows: false,
//  speed: 600, // smoother transition duration
//  cssEase: 'ease-in-out', // smooth easing
//  slidesToShow: 4,
//  slidesToScroll: 1,
//  autoplay: true,
//  autoplaySpeed: 1500, // slowed down a bit
//  responsive: [
//    {
//      breakpoint: 1024,
//      settings: {
//        slidesToShow: 3,
//        slidesToScroll: 3
//      }
//    },
//    {
//      breakpoint: 600,
//      settings: {
//        slidesToShow: 2,
//        slidesToScroll: 2
//      }
//    },
//    {
//      breakpoint: 480,
//      settings: {
//        slidesToShow: 1,
//        slidesToScroll: 1
//      }
//    }
//  ]
//});


//
//function commonFunction(phone,laptop,tv,watch,headphone,camera, num){
//	
//
//	let phonediv=document.getElementById(phone);
//	let laptopdiv=document.getElementById(laptop);
//	let tvdiv=document.getElementById(tv);
//	let watchdiv=document.getElementById(watch);
//	let headphonediv=document.getElementById(headphone);
//	let cameradiv=document.getElementById(camera);
//	
//		phonediv.style.display='none';
//		laptopdiv.style.display='none';
//		tvdiv.style.display='none';
//		watchdiv.style.display='none';
//		headphonediv.style.display='none';
//		cameradiv.style.display='none';
//	
//
////	if(num == 1){  //phone
////		phonediv.style.display='block';
////	}
////	
////	else if(num==2){ 
////		laptopdiv.style.display='block';
////
////	}
////	
////	else if(num==3){
////		tvdiv.style.display='block';
////	}
////	
////	else if(num==4){
////		watchdiv.style.display='block';
////	}
////	
////	else if(num==5){
////		headphonediv.style.display='block';
////	}
////	else if(num==6){
////		cameradiv.style.display='block';
////	}
//	
//	switch(num){
//		case 1:
//		phonediv.style.display='block';
//			break;
//		case 2:
//		laptopdiv.style.display='block';
//			break;
//		case 3:
//		tvdiv.style.display='block';
//			break;
//		case 4:
//		watchdiv.style.display='block';
//			break;
//		case 5:
//		headphonediv.style.display='block';
//			break;
//		case 6:
//		cameradiv.style.display='block';
//			break;
//		default :
//			alert('error');
//			break
//	}
//	
//}




function commonFunction(id, bg_color) {
	//		alert(items);
	let section = ['phone', 'laptop', 'tv', 'watch', 'headphone', 'camera'];
	//	alert(section[1]);
	for (let i = 0; i < section.length; i++) {
		let values = document.getElementById(section[i]);
		values.style.display = 'none';
	}

	let items = document.getElementById(id);
	items.style.display = "block";

	let nav_bg = ['nav_bg_phone', 'nav_bg_laptop', 'nav_bg_tv', 'nav_bg_watch', 'nav_bg_headphone', 'nav_bg_camera'];
	for (i = 0; i < nav_bg.length; i++) {
		let nav_value = document.getElementById(nav_bg[i]);
		nav_value.style.background = "white";
		nav_value.style.color = "black";
	}
	let bg = document.getElementById(bg_color);
	bg.style.backgroundColor = "darkseagreen";
	bg.style.color = "white";



}


//		Responsive navBar

$(document).ready(function () {
	$("#menu_toggle").click(function () {
		$("#responsive_menu").slideToggle('slow');
	});
});




//	Registration Form validation

function validation() {
	let name = document.getElementById('r_name');
	let email = document.getElementById('r_email');
	let password = document.getElementById('r_password');
	let phone = document.getElementById('r_phone');
	let value = 0;


	if (phone.value == "") {
		phone.focus();
		phone.style.borderBottomColor = "red";
		value = 1;
	}

	if (password.value == "") {
		password.focus();
		password.style.borderBottomColor = "red";
		value = 1;

	}

	if (email.value == "") {
		email.focus();
		email.style.borderBottomColor = "red";
		value = 1;
	}

	if (name.value == "") {
		name.focus();
		name.style.borderBottomColor = "red";
		value = 1;
	}
	if (value == 1) {
		return false;
	} else {
		return true;
	}

}


function removeValidation(id, checking) {
	let fieldId = document.getElementById(id);
	if (checking == 1) {
		fieldId.style.borderBottomColor = "darkseagreen";
	} else {
		fieldId.style.borderColor = "darkseagreen";
	}
	//	if(name.value!=""){
	//		name.style.borderBottomColor="green";
	//	}
}




//	login Form validation

function loginValidation() {
	let email = document.getElementById('l_email');
	let password = document.getElementById('l_password');
	let checkbox = document.getElementById('l_checkbox');

	if (email.value == "") {
		email.focus();
		email.style.borderBottomColor = "red";
		return false;
	}

	if (password.value == "") {
		password.focus();
		password.style.borderBottomColor = "red";
		return false;
	}

	//	if(checkbox.checked==false){
	//		checkbox.autofocus;
	//		checkbox.style.outline="red";
	//		return false;
	//	}
}


//addProductValidation

function addProductValidation() {
	let pro_name = document.getElementById('product_name');
	let pro_price = document.getElementById('product_price');
	let pro_stock = document.getElementById('product_stock');
	let pro_type = document.getElementById('product_option');
	let pro_brand = document.getElementById('product_brand');
	let pro_des = document.getElementById('product_des');
	let pro_img = document.getElementById('product_img');
	let value = 0;

	if (pro_name.value == "") {
		pro_name.focus();
		pro_name.style.borderColor = "red";
		pro_name.classList.add('placeholder-error');
		value = 1;
	}

	if (pro_price.value == "") {
		pro_price.focus();
		pro_price.style.borderColor = "red";
		pro_price.classList.add('placeholder-error');
		value = 1;
	}

	if (pro_stock.value == "") {
		pro_stock.focus();
		pro_stock.style.borderColor = "red";
		pro_stock.classList.add('placeholder-error');
		value = 1;
	}

	if (pro_type.value == 0) {
		pro_type.focus();
		pro_type.style.borderColor = "red";
		pro_type.classList.add('clr');
		pro_type.classList.remove('newClr');
		value = 1;
	}

	if (pro_brand.value == 0) {
		pro_brand.focus();
		pro_brand.classList.add('clr');
		pro_brand.classList.remove('newClr');
		pro_brand.style.borderColor = "red";
		value = 1;
	}

	if (pro_des.value == "") {
		pro_des.focus();
		pro_des.style.borderColor = "red";
		pro_des.classList.add('placeholder-error');
		value = 1;
	}

	if (pro_img.value == "") {
		pro_img.focus();
		alert('add image');
		value = 1;
	}

	if (value == 1) {
		return false;
	} else {
		return true;
	}

}





function changeValidation(id) {
	let fieldId = document.getElementById(id);
	if (fieldId.value != 0) {
		fieldId.classList.add('newClr');
		fieldId.classList.remove('clr');
		fieldId.style.borderColor = "darkseagreen";

	}

}



// menuBar dropDown

const selected = document.querySelector(".select_categry");
const options = document.querySelector(".categry_items");

selected.addEventListener("click", () => {
	options.style.display = options.style.display === "block" ? "none" : "block";
});

options.addEventListener("click", (e) => {
	if (e.target.tagName === "DIV") {
		selected.textContent = e.target.textContent;
		options.style.display = "none";
	}
});

document.addEventListener("click", (e) => {
	if (!e.target.closest(".categry_section")) {
		options.style.display = "none";
	}
});







//   product preview

let previewContainer = document.querySelector('.product-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.rec_container .rec_products_box').forEach(rec_products_box => {
	rec_products_box.addEventListener('click', () => {
		previewContainer.style.display = 'flex';
		let dataName = rec_products_box.getAttribute('data-name');

		previewBox.forEach(preview => {
			let target = preview.getAttribute('data-target');
			if (dataName === target) {
				preview.classList.add('active');
				preview.classList.remove('add');
			} else {
				preview.classList.remove('active');
				preview.classList.add('add');
			}
		});
	});
});

previewBox.forEach(closeBtnParent => {
	closeBtnParent.querySelector('.close-icon').addEventListener('click', () => {
		closeBtnParent.classList.remove('active');
		previewContainer.style.display = 'none';
	});
});



// //password hide and show

// // document.addEventListener('DOMContentLoaded', () => {
// 		const passwordField = document.getElementById('l_password');

// 	    passwordField.addEventListener("keyup", function(event) {
//         // Code to execute when a key is released
//         console.log("Key released:", event.key);
//     });


// 		// const passwordField = document.getElementById('l_password');
// 		alert(passwordField);
// 		const passwordIcon = document.getElementById('passwordIcon');

// 		passwordIcon.style.display = 'none';

// 		passwordField.addEventListener('input', () => {
// 			alert("kdgj");
// 			if (passwordField.value.length > 0) {
// 				passwordIcon.style.display = 'block';
// 			} else {
// 				passwordIcon.style.display = 'none';
// 			}
// 		});

// 		passwordIcon.addEventListener('click', () => {
// 			if (passwordField.type === 'password') {
// 				passwordField.type = 'text';
// 				passwordIcon.textContent = '🙈'; // Closed eye
// 			} else {
// 				passwordField.type = 'password';
// 				passwordIcon.textContent = '👁️'; // Open eye
// 			}
// 		});
// 	// });


function showAndHide(passwordField, loginHidePasswordIcon, loginShowPasswordIcon) {
	if (passwordField.type === 'password') {
		passwordField.type = 'text';
		loginHidePasswordIcon.style.display = 'block';
		loginShowPasswordIcon.style.display = 'none';
	}
	else if (passwordField.type === 'text') {
		passwordField.type = 'password';
		loginHidePasswordIcon.style.display = 'none';
		loginShowPasswordIcon.style.display = 'block';
	}
}



	// Testimonial slider

 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
    //   spaceBetween: 30,
	grabCursor:true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });








