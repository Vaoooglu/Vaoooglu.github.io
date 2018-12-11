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