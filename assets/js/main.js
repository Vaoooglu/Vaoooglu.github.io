
jQuery(document).ready(function(){
	$('#menu li').hover(
							function () {
									$('ul', this).stop().slideDown(400);
							},
							function () {
									$('ul', this).stop().slideUp(400);
							}
					);
	});
