(function (argument) {
	$('.item-port').click(function(event) {
		var linkTo = $(this).data('url');
		var currentLink = window.location.hostname;
		alert(currentLink + "/template/" + linkTo + "/index.html")
	});
	var a = $('.item-port img').data('url');
})()