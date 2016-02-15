Template.Testimonials.onRendered(function() {
	$(".testimonials-carousel").owlCarousel({
		singleItem: true,
		navigation: true,
		pagination: true,
		autoHeight: true,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		],
		transitionStyle: "backSlide"
	});
	new WOW().init();
	smoothScroll.init();
});
