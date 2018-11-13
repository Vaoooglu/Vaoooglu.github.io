$(document).ready(function() {
	var containerMenu=$("#MainMenu");
$("#MenuIcon").click(function(){
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

$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 450) {
            $('#MenuIcon').fadeOut();
        } else {
            $('#MenuIcon').fadeIn();
        }
    });
});



});