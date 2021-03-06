(function (argument) {
	//PORTFOLIO LINK
	$('.item-port').click(function(event) {
		var linkTo = $(this).data('url');
		var currentLink = window.location.hostname;
		window.open("/template/" + linkTo + "/index.html",'_blank');
	});
	
	//NAVIGATION
	var itemsMenu = $('.items-menu li');

	$(itemsMenu).click(function(event) {
	//ADD ACTIVE CLASS
		for (var i = 0; i < itemsMenu.length; i++) {
			$(itemsMenu[i]).removeClass('active');
		};
		$(this).addClass('active');
	
	//LINK TO ANCHOR
		var hrefMenu = '#' + $(this).data('url');
		$('.open-menu').trigger('click');
		$('html,body').animate({scrollTop: $(hrefMenu).offset().top}, 500);
	});

	//OPEN LEFT MENU
	$('.open-menu').on('click',function(event) {
		$('#left').toggleClass('open');
		$('#right').toggleClass('open');
		$(this).toggleClass('open');
	});

	//GO TO PORTFOLIO
	$('.btn-top').click(function(event) {
		$('html,body').animate({scrollTop: $('#portfolio').offset().top}, 500);
	});

})()