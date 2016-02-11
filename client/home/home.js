Meteor.startup(function () {
	smoothScroll.init();
});

Template.Video.events({
	"click a.page-scroll": function(event){
		var $anchor = $(this);
		$('.body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top - 50)
		}, 1250, 'easeInOutExpo');
		event.preventDefault();
	}
});


Template.Home.onRendered(function() {
	$(".portfolio-gallery").owlCarousel({
		items: 3,
	});
	new WOW().init();

	Retina({retinajs: true, attribute : 'data-retina'});

});

Template.Video.onRendered(function() {
	this.$('.overlay').vide('/mp4/camera', {
		className: 'vide',
	});
});

Template.AboutLanding.onRendered(function() {
	new WOW().init()

});

Template.CarouselPortfolio.onRendered(function() {
	new WOW().init();

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
});

Template.Testimonials.onRendered(function() {
	new WOW().init();

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
});

Template.PricingBoxes.onRendered(function() {
	new WOW().init();

});

Template.AboutLanding.helpers({
	'styleHeight': function() {
		var screenHeight = window.innerHeight;
		var endStatement = "margin-top: " + screenHeight + "px";
		return {
			style: endStatement
		}
	}
})