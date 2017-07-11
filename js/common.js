$(document).ready(function() {
	var mixer = mixitup('.container');

	function heightDetect(){
		$(".parallax-header").css("height", $(window).height());	
		$(".parallax-about").css("height", $(window).height());	
		$(".parallax-footer").css("height", "350px");	
	};

	heightDetect();

	$(window).resize(function(){
		heightDetect();
	});	

	$(".left-menu li").click(function(){
		$(".left-menu li").removeClass("active");
		$(this).addClass("active");
	});

	$(".portfolio-head li").click(function(){
		$(".portfolio-head li").removeClass("active");
		$(this).addClass("active");
	});

	$('.img-responsive').magnificPopup({
		type:'image'
	});
	
	$(".left-menu a").mPageScroll2id();

	new WOW().init();

});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(100).fadeOut("slow");
});
