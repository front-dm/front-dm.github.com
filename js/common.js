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

	// $(".left-menu li").click(function(){
	// 	$(".left-menu li").removeClass("active");
	// 	$(this).addClass("active");
	// });

	$(".portfolio-head li").click(function(){
		$(".portfolio-head li").removeClass("active");
		$(this).addClass("active");
	});

	$('.img-responsive').magnificPopup({
		type:'image'
	});
	
	$(".left-menu a").mPageScroll2id();

	new WOW().init();

	function changeLeftMenu(el) {
		$(".left-menu li").removeClass("active");
		$(".left-menu a[href='#"+ el +"'] li").addClass("active");
	}

	$(document).on('scroll', function(){
	    var header = $("#header").offset().top;
	    var portfolio = $("#portfolio").offset().top;
	    var about = $("#about").offset().top;
	    var contact = $("#contact").offset().top;
	    var footer = $("#footer").offset().top;
	    var scroll = $(window).scrollTop() + $(window).height();
	    const offset = 150;
	    if(scroll >= (header+offset)) {
	    	changeLeftMenu("header");
	    };

	    if(scroll >= (portfolio+offset)) {
	    	changeLeftMenu("portfolio");
	    };

	    if(scroll >= (about+offset)) {
	    	changeLeftMenu("about");
	    };

	    if(scroll >= (contact+offset)) {
	    	changeLeftMenu("contact");
	    };

	    if(scroll >= (footer+offset)) {
	    	changeLeftMenu("footer");
	    };
	});

});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(100).fadeOut("slow");
});
