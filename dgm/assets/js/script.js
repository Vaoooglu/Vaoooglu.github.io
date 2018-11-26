$(document).ready(function() {
		var containerMenu=$("#MainMenu");
		$("#MenuIcon, #leftborder").click(function(){
				containerMenu.css("left","0px");
					function showMenu(){
						containerMenu.css("clip-path","polygon(0 0,100% 0, 100% 100%,0% 100%)");
						containerMenu.css("-webkit-clip-path","polygon(0 0,100% 0, 100% 100%,0% 100%)");
						$("#MenuIcon").animate({right: '-100'},300);
					}
				setTimeout(showMenu,100);
		});
		$("#close").click(function(){
			containerMenu.css("clip-path","polygon(0 0,0 0, 100% 100%,0% 100%)");
			containerMenu.css("-webkit-clip-path","polygon(0 0,0 0, 100% 100%,0% 100%)");
				function hideMenu(){
					containerMenu.css("left","-350px");
					$("#MenuIcon").animate({right: '50'},300);
				}
				setTimeout(hideMenu,300);
				function originalLayout(){
					containerMenu.css("clip-path","polygon(0 0,100% 0,0 100%,0% 100%)");
					containerMenu.css("-webkit-clip-path","polygon(0 0,100% 0,0 100%,0% 100%)");
				}
				setTimeout(originalLayout,300);
		});

		$(document).mouseup(function (e){
		var closeMenuElem = $("#MenuIcon,#leftborder, #MainMenu");
		if (!closeMenuElem.is(e.target) && closeMenuElem.has(e.target).length === 0) {
					closeMenu(this);
		}
		function closeMenu (){
			containerMenu.css("clip-path","polygon(0 0,0 0, 100% 100%,0% 100%)");
			containerMenu.css("-webkit-clip-path","polygon(0 0,0 0, 100% 100%,0% 100%)");
				function hideMenu(){
					containerMenu.css("left","-350px");
					$("#MenuIcon").animate({right: '50'},300);
				}
				setTimeout(hideMenu,300);
				function originalLayout(){
					containerMenu.css("clip-path","polygon(0 0,100% 0,0 100%,0% 100%)");
					containerMenu.css("-webkit-clip-path","polygon(0 0,100% 0,0 100%,0% 100%)");
				}
				setTimeout(originalLayout,300);
		};
});

		$(window).scroll(function () {
			if ($(this).scrollTop() > 450) {
					$('#MenuIcon').fadeOut("fast");
			} else {
					$('#MenuIcon').fadeIn("fast");
			}
		});


		$('.scrol-btn').click(function(){
			$('html,body').animate({scrollTop: 0}, 1000);
		});


});
$(document).ready(function(){
	$('a').each(function () {
					var location = window.location.href;
					var link = this.href;
					if(location == link) {
							$(this).addClass('active');
					}
			});
	});

$(document).ready(function(){
	$('input#field-firstName, input#field-email, input#field-phoneNumber, textarea#field-commentOrQuestion, input#name, input#email, textarea#message').unbind().blur( function(){
			var id = $(this).attr('id');
			var val = $(this).val();
		switch(id)
		{
					// Проверка поля "Имя"
					case 'field-firstName':
						 var rv_name = /^[a-zA-Zа-яА-Я]+$/;
						 if(val.length > 2 && val != '' && rv_name.test(val))
						 {
								$(this).addClass('not_error');
								$(this).next('.error-box').text('Готово')
																					.css('color','#1A2930')
																					.animate({'paddingLeft':'10px'},400)
																					.animate({'paddingLeft':'5px'},400);
						 }
						 else
						 {
								$(this).removeClass('not_error').addClass('error');
								$(this).next('.error-box').html('Поле обязательно для заполнения,<br>имя должно содержать только русские или латинские буквы')
																					 .css('color','#b70021')
																					 .animate({'paddingLeft':'10px'},400)
																					 .animate({'paddingLeft':'5px'},400);
						 }
				 break;

				// Проверка email
				case 'field-email':
						var rv_email =/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
						if(val != '' && rv_email.test(val))
						{
							 $(this).addClass('not_error');
							 $(this).next('.error-box').text('Готово')
																				 .css('color','#1A2930')
																				 .animate({'paddingLeft':'10px'},400)
																				 .animate({'paddingLeft':'5px'},400);
						}
						else
						{
							 $(this).removeClass('not_error').addClass('error');
							 $(this).next('.error-box').html('Введите, пожалуйста, корректно "Email"')
																					.css('color','#b70021')
																					.animate({'paddingLeft':'10px'},400)
																					.animate({'paddingLeft':'5px'},400);
						}
				break;
			 //Проверка поля "Телефон"
			 case 'field-phoneNumber':
						var rv_phone =/^\d[\d\(\)\ -]{4,14}\d$/;
						if(val != '' && rv_phone.test(val))
						{
							 $(this).addClass('not_error');
							 $(this).next('.error-box').text('Готово')
																				 .css('color','#1A2930')
																				 .animate({'paddingLeft':'10px'},400)
																				 .animate({'paddingLeft':'5px'},400);
						}
						else
						{
							 $(this).removeClass('not_error').addClass('error');
							 $(this).next('.error-box').html('Введите,пожалуйста, корректно номер телефона')
																					.css('color','#b70021')
																					.animate({'paddingLeft':'10px'},400)
																					.animate({'paddingLeft':'5px'},400);
						}
				break;

			 // Проверка поля "Сообщение"
			 case 'field-commentOrQuestion':
					 if(val != '' && val.length > 20)
					 {
							$(this).addClass('not_error');
							$(this).next('.error-box').text('Готово')
																				.css('color','#1A2930')
																				.animate({'paddingLeft':'10px'},400)
																				.animate({'paddingLeft':'5px'},400);
					 }
					 else
					 {
							$(this).removeClass('not_error').addClass('error');
							$(this).next('.error-box').html('Введите Ваше сообщение...')
																				.css('color','#b70021')
																				.animate({'paddingLeft':'10px'},400)
																				.animate({'paddingLeft':'5px'},400);
					 }
			 break;
		}
	});

	// отправка с AJAX
	$('form#comment-form').submit(function(e){
			e.preventDefault();

			// После того, как мы нажали кнопку "Отправить", делаем проверку,
			// если кол-во полей с классом .not_error равно 3 (так как у нас всего 3 поля), то есть все поля заполнены верно,
			// выполняем наш Ajax сценарий и отправляем письмо адресату

			if($('.not_error').length == 4)
			{
				 // Eще одним моментом является то, что в качестве указания данных для передачи обработчику send.php, мы обращаемся $(this) к нашей форме,
				 // и вызываем метод .serialize().
				 // Это очень удобно, т.к. он сразу возвращает сгенерированную строку с именами и значениями выбранных элементов формы.

				// 	$.ajax({

				// 				 url: '../assets/js/mail.php',
				// 				 type: 'post',
				// 				 data: $(this).serialize(),

				// 				 beforeSend: function(xhr, textStatus){
				// 							$('form#comment-form :input').attr('disabled','disabled');
				// 				 },

				// 				success: function(response){
				// 						 $('form#comment-form :input').removeAttr('disabled');
				// 						 $('form#comment-form :text, textarea').val('').removeClass().next('.error-box').text('');
				// 						 alert(response);
				// 				}
				//  }).done(function(){
				// 	$('.js-overlay-thank-you').fadeIn();
				// 	$(this).find('input').val('');
				// 	$('#comment-form').trigger('reset');
				//  });
		 }

		 // Иначе, если количество полей с данным классом не равно значению 3, мы возвращаем false,
		 // останавливая отправку сообщения в невалидной форме
		else
		{
			 return false;
		}

}); // end submit()

}); // end script



$(document).ready(function() {
	$("#btn-form").click(function(){
		$('.popup-wrapper').fadeIn();
		$(this).find('input').val('');
		$('#comment-form').trigger('reset');
	});
	$('.close-popup-thank-you').click(function() {
			$('.popup-wrapper').fadeOut();
		});
	$(document).mouseup(function (e) {
	var popup = $('.popup-thank-you');
	  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
	    $('.popup-wrapper').fadeOut();
	    }
	});

	 });


// 	 function come(elem) {
// 			var docViewTop = $(window).scrollTop(),
// 				docViewBottom = docViewTop + $(window).height(),
// 				elemTop = $(elem).offset().top,
// 				elemBottom = elemTop + $(elem).height();

// 			return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// 		}

// 		if (come(".history_foto img")) {
// this.css("display: none");
// 		}

// function inWindow(elem){
//   var scrollTop = $(window).scrollTop();
//   var windowHeight = $(window).height();
//   var currentEls = $(elem);
//   var result = [];
//   currentEls.each(function(){
//     var el = $(this);
//     var offset = el.offset();
//     if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
//       result.push(this);
//   });
//   return $(result);
// }
// var boxesInWindow = inWindow("img.history_foto_img");

// // сделаем фон этих элементов красным
// boxesInWindow.css("animation", "scale_img 30s infinite linear");