$(document).ready(function() {
	var arrAncor = $(".menu > li > a[href^='#']");
	arrAncor.click(function(event) {
		var href = $(this).attr('href');
		$('html, body').animate({scrollTop: $(href).offset().top}, 800);
		return false;
	});

	$("span.brand").click(function(event) {
		$('html, body').animate({scrollTop: 0}, 800);
	});

	$(document).scroll(function(event) {
		if($(window).scrollTop() >= 100){
			$("nav").css('background', '#222222').addClass('navbar-fixed-top');
		}
		else {
			$("nav").css('background', 'transparent').removeClass('navbar-fixed-top');
		}
	});
});