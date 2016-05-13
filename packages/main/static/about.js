Template.About.onRendered(() => {
	$(".about-carousel").owlCarousel({
		items: 3,
		navigation: true,
		pagination: false,
		navigationText: [
		"<i class='fa fa-angle-left'></i>",
		"<i class='fa fa-angle-right'></i>"
		],
	});
});
