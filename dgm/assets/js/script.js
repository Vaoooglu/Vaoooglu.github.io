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
function supportsImports() {
  return 'import' in document.createElement('link');
}

if (supportsImports()) {
  console.log("Браузер поддерживает import HTML");
} else {
  console.log("НЕТ ПОДДЕРЖКИ import HTML");
}