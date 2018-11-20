
$(document).ready(function() {


	$(window).bind('load', function() {
			$("#preloader").fadeOut();
			$("#preloader").delay(2000).fadeOut("slow");
			// $.fn.fullpage.moveTo(1);
	});

 // Анимация
	var Android = navigator.userAgent.search(/Android/i);
	var iPhone = navigator.userAgent.search(/iPhone/i);
	var iPad = navigator.userAgent.search(/iPad/i);
	if(Android != -1 || iPhone != -1 || iPad != -1) {

			$('head').append('<link rel="stylesheet" type="text/css" href="../../dist/css/mobile.css" />'); //подключение файла mobile.css если мобильник

	} else {

			$('head').append('<link rel="stylesheet" type="text/css" href="../../dist/css/fullpage.min.css" />'); //подключение файла jquery.fullPage.css если не мобильник

			$('#page').fullpage({
					menu: '#topnav',
					anchors: ['homepage', 'ekonomiya', 'services', 'garant', 'advantages', 'reviews', 'how-it-work', 'sales', 'contactPage'],
					css3: true,
					verticalCentered: false,
					navigation: true,
					slidesNavigation: false,
					navigationPosition: 'right',
					showActiveTooltip: true,
					responsive: 980,
					navigationTooltips: ['Главная', 'Экономия', 'Услуги', 'Гарантии', 'Преимущества', 'Отзывы', 'Как мы работаем', 'Акция', 'Контакты'],
					onLeave: function(index , nextIndex , direction){
							//var id_slide = $(this).attr('id');
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
			"wp-content/themes/4u-group/img/montag/block-06_motz1.jpg",
			"wp-content/themes/4u-group/img/montag/block-06_motz2.jpg",
			"wp-content/themes/4u-group/img/montag/block-06_motz3.jpg"
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



$("#sendbutton2").click(
	function() {
		 if(!$("#li-2-2").hasClass("cf_li_err")) {
								 // alert("У элемента задан класс success");
					$("#cf2_field_2").addClass("skrit")
					$("#cf2_field_1").addClass("skrit")
					$("#sendbutton2").addClass("skrit")
					$("#usermessage2a").addClass("bigtext")
						 // alert("Поля скрыты! текст увеличен");
					//yaCounter30676433.reachGoal('bespl');
					//yaCounter30676433.reachGoal('obsh');
			}

	}
)
$("#sendbutton").click(
	function() {
		 if(!$("#li-2-2").hasClass("cf_li_err")) {
								 // alert("У элемента задан класс success");
					$("#cf_field_2").addClass("skrit")
					$("#cf_field_1").addClass("skrit")
					$("#cf_field_3").addClass("skrit")
					$("#sendbutton").addClass("skrit")
					$("#usermessagea").addClass("bigtext")
						 // alert("Поля скрыты! текст увеличен");
					//yaCounter30676433.reachGoal('bespl');
					//yaCounter30676433.reachGoal('obsh');
			}

	}
)


$(document).ready(function() {

// (function($) {
// 	$(function() {
			$('#cf_field_3,select').styler();
	});

// })(jQuery);