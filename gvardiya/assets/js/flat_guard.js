var isPhoneDevice = "ontouchstart" in document.documentElement;
$(document).ready(function() {
	$(window).bind('load', function() {
			$("#preloader").fadeOut();
			$("#preloader").delay(1500).fadeOut("slow");
	});
					if(isPhoneDevice){
						$('head').append('<link rel="stylesheet" type="text/css" href="dist/css/mobile.css" />');
					}
							else{
								$('head').append('<link rel="stylesheet" type="text/css" href="dist/js/jquery.fullPage/jquery.fullPage.css" />');	//desktop
								$('#page').fullpage({
									menu: '#topnav',
									anchors: ['flat_guard', 'sales', 'contactPage'],
									css3: true,
									verticalCentered: false,
									navigation: true,
									slidesNavigation: false,
									navigationPosition: 'right',
									showActiveTooltip: true,
									responsive: 980,
									navigationTooltips: ['Охрана квартиры','Акция', 'Контакты'],
									onLeave: function(index , nextIndex , direction){
												change_slide (nextIndex);
									}
						 		});
							}
});
$('.btn-popup').click(function() {
	if(!$('.popup-wrapper-consultation').hasClass("shown")){
		$('.popup-wrapper-consultation').addClass("shown")
	}
});
$(document).mouseup(function (e) {
	var popup1 = $('#consultation');
		if (e.target!=popup1[0]&&popup1.has(e.target).length === 0){
			$('.popup-wrapper-consultation').removeClass("shown");}
	});

$(document).ready(function() {
			$('#cf_field_3,select').styler();
	});

$(document).ready(function(){
		$('input#cf_field_1, input#cf_field_2').unbind().blur( function(){
				var id = $(this).attr('id');
				var val = $(this).val();
			switch(id)
			{
						// Проверка поля "Имя"
						case 'cf_field_1':
							 var rv_name = /^[a-zA-Zа-яА-Я]+$/;
							 if(val.length > 1 && val != '' && rv_name.test(val))
							 {	$(this).addClass('not_error');
									$(this).next('.error-box').text('Готово').css('color','#1A2930').animate({'paddingLeft':'10px'},400).animate({'paddingLeft':'5px'},400);}
							 else
							 {	$(this).removeClass('not_error').addClass('error');
									$(this).next('.error-box').html('Введите корректное имя').css('color','#b70021').animate({'paddingLeft':'10px'},400).animate({'paddingLeft':'5px'},400);}
					 break;
				 //Проверка поля "Телефон"
				 case 'cf_field_2':
							var rv_phone =/^[+]?[-0-9\(\) ]{10,20}$/;
							if(val != '' && rv_phone.test(val))
							{	 $(this).addClass('not_error');
								 $(this).next('.error-box').text('Готово').css('color','#1A2930').animate({'paddingLeft':'10px'},400).animate({'paddingLeft':'5px'},400);}
							else
							{	 $(this).removeClass('not_error').addClass('error');
								 $(this).next('.error-box').html('Введите правильный номер телефона').css('color','#b70021').animate({'paddingLeft':'10px'},400).animate({'paddingLeft':'5px'},400);}
					break;
			}
		});
		// отправка с AJAX
		$('form#cformsform').submit(function(e){
				e.preventDefault();
				if($('.not_error').length == 2)
				{
        let data = $('#cformsform').serialize();
        if (!data) return false;
						$.ajax({
							     type: "POST",
									 url: "mail.php",
									 data: data,
									 beforeSend:function(xhr, textStatus){
												$('form#cformsform :input').attr('disabled','disabled');
									 },
									success: function(){
											 $('form#cformsform :input').removeAttr('disabled');
											 $('form#cformsform :text, textarea').val('').removeClass().next('.error-box').text('');
											 $('#form-inner').css('display','none');
											 ;
									}
					 }).done(function(){
						$('.popup-wrapper').fadeIn();
						$(this).find('input').val('');
						$('#ccformsform').trigger('reset');
						});

						$('.close-popup-thank-you').click(function() {
							$('.popup-wrapper').fadeOut();
						});
					$(document).mouseup(function (e) {
					var popup = $('.popup-thank-you');
						if (e.target!=popup[0]&&popup.has(e.target).length === 0){
							$('.popup-wrapper').fadeOut();}
					});
			 }
			else
			{return false;}
	}); // end submit()
	}); // end script

	$(document).ready(function(){
		$('input#cf2_field_1, input#cf2_field_2').unbind().blur( function(){
				var id = $(this).attr('id');
				var val = $(this).val();
			switch(id)
			{
						// Проверка поля "Имя"
						case 'cf2_field_1':
							 var rv_name = /^[a-zA-Zа-яА-Я]+$/;
							 if(val.length > 1 && val != '' && rv_name.test(val))
							 {	$(this).addClass('not_error');
									$(this).next('.error-box').text('Готово').css('color','#1A2930').animate({'paddingLeft':'10px'},400).animate({'paddingLeft':'5px'},400); }
							 else
							 {	$(this).removeClass('not_error').addClass('error');
									$(this).next('.error-box').html('Введите корректное имя').css('color','#b70021').animate({'paddingLeft':'10px'},400).animate({'paddingLeft':'5px'},400);}
					 break;
				 //Проверка поля "Телефон"
				 case 'cf2_field_2':
							var rv_phone =/^[+]?[-0-9\(\) ]{10,20}$/;
							if(val != '' && rv_phone.test(val))
							{	 $(this).addClass('not_error');
								 $(this).next('.error-box').text('Готово').css('color','#1A2930').animate({'paddingLeft':'10px'},400).animate({'paddingLeft':'5px'},400);}
							else
							{	 $(this).removeClass('not_error').addClass('error');
								 $(this).next('.error-box').html('Введите правильный номер телефона').css('color','#b70021').animate({'paddingLeft':'10px'},400).animate({'paddingLeft':'5px'},400);}
					break;
			}
		});
		// отправка с AJAX
		$('form#cforms2form').submit(function(e){
				e.preventDefault();
				if($('.not_error').length == 2)
				{
					 let data1 = $('#cforms2form').serialize();
					 if (!data1) return false;
						$.ajax({
									 url: 'mail2.php',
									 type: 'post',
									 data: data1,
									 beforeSend: function(xhr, textStatus){
												$('form#cforms2form :input').attr('disabled','disabled');},
									success: function(){
											 $('form#cforms2form :input').removeAttr('disabled');
											 $('form#cforms2form :text, textarea').val('').removeClass().next('.error-box').text('');
											if($('.popup-wrapper-consultation').hasClass("shown")){
	                  	$('.popup-wrapper-consultation').removeClass("shown")}
									}
					 }).done(function(){
						$('.popup-wrapper').fadeIn();
						$(this).find('input').val('');
						$('#ccforms2form').trigger('reset');
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
			 }
			else
			{return false;}
	}); // end submit()
	}); // end script