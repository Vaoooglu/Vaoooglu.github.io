var isPhoneDevice = "ontouchstart" in document.documentElement;
$(document).ready(function() {
	$(window).bind('load', function() {
			$("#preloader").fadeOut();
			$("#preloader").delay(2000).fadeOut("slow");
	});
					if(isPhoneDevice){
						$('head').append('<link rel="stylesheet" type="text/css" href="dist/css/mobile.css" />');
					}
							else{
								$('head').append('<link rel="stylesheet" type="text/css" href="dist/js/jquery.fullPage/jquery.fullPage.css" />');	//desktop
								$('#page').fullpage({
									menu: '#topnav',
									anchors: ['homepage', 'ekonomiya', 'services', 'garant', 'answer-quetion', 'advantages', 'how-it-work', 'sales', 'contactPage'],
									css3: true,
									verticalCentered: false,
									navigation: true,
									slidesNavigation: false,
									navigationPosition: 'right',
									showActiveTooltip: true,
									responsive: 980,
									navigationTooltips: ['Главная', 'Экономия', 'Услуги', 'Гарантии', 'Вопрос-ответ','Преимущества',  'Как мы работаем', 'Акция', 'Контакты'],
									onLeave: function(index , nextIndex , direction){
												change_slide (nextIndex);
									}
						 		});
							}
});
$(".popup, .certificate-img").fancybox({
	padding     : '0'
});
$('.stick').slick({
	infinite: true,
	slidesToShow : 1,
	prevArrow: '<span class="slide-nav prev mini-prev"></span>',
	nextArrow: '<span class="slide-nav next mini-next"></span>'
});
var slider = $('.slider');
slider.owlCarousel({
	loop:true,
	margin:10,
	items: 1
});
var otz_nom = 0;
var otz = new Array();
otz = [
			"dist/img/block-06_motz1.jpg",
			"dist/img/block-06_motz2.jpg",
			"dist/img/block-06_motz3.jpg"
			];
var otz_max = otz.length;
$('.page-next').click(function() {
	slider.trigger('next.owl.carousel');
	otz_nom += 1;
	if (otz_nom == otz_max) otz_nom = 0;
	$(".block-06").css("background", 'url("'+otz[otz_nom]+'") left top no-repeat')
});
$('.page-prev').click(function() {
	slider.trigger('prev.owl.carousel');
	otz_nom -= 1;
	if (otz_nom < 0) otz_nom = otz_max-1;
	$(".block-06").css("background", 'url("'+otz[otz_nom]+'") left top no-repeat')
});
$(".advantages li").hover(
	function () {
			$(".advantages li").removeClass("active");
			$(this).addClass("active");
	}
);
$('#li--4').click(function() {
setTimeout("$('#li--4 span').replaceWith('файл прикреплен')", 2000);
});
$('#li--5').click(function() {
	setTimeout("$('#li--5 span').replaceWith('файл прикреплен')", 2000);
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


	(function($) {
    $('.block06a-accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.block06a-accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.block06a-accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.block06a-accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);



(function($) {
$('.payforclass,#close_payfor').click(function() {
	$('.popup-wrapper-payfor').toggleClass("shownpay")
});
$(document).mouseup(function (e) {
	var popup1 = $('#payfor');
		if (e.target!=popup1[0]&&popup1.has(e.target).length === 0){
			$('.popup-wrapper-payfor').removeClass("shownpay");}
	});
})(jQuery);

$(document).ready(function() {
	$(".departments_print").click(function(){
		var receipt = $(".print").html();
	var barwin = window.open('', barwin, 'height=600,width=600');
	barwin.document.write(receipt);
	barwin.document.close(); // necessary for IE >= 10
	barwin.focus(); // necessary for IE >= 10
	barwin.print();
		barwin.close();
	});
});