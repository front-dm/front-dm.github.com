$(document).ready(function() {
	$(".btn-open i").add(".close i").click(function(event) {
		$(".menu").toggleClass('open');
	});

	$(".to-top i").click(function(event) {
		$("html, body").animate(
		{
			scrollTop: 0
		},
			800
		);
	});

	$(".navigation a[href^='#']").click(function(event) {
		var href = $(this).attr('href');
		$('html, body').animate(
		{
			scrollTop: $(href).offset().top
		},800);
	});
});