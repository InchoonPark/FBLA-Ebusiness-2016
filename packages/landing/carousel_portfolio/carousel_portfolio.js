Template.CarouselPortfolio.onRendered(() => {
	const screenHeight = rwindow.innerHeight();
	$('#portfolio-scroll').css('margin-top', screenHeight + 'px');

	$(".portfolio-carousel").owlCarousel({
		singleItem: true,
		navigation: true,
		pagination: false,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		],
		autoHeight: true,
		mouseDrag: false,
		touchDrag: false,
		transitionStyle: "fadeUp"
	});
	new WOW().init();
	smoothScroll.init();
});
