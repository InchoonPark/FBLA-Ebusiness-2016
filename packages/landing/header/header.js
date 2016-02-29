Template.Header.events({
	"click [data-action=page-scroll]"(event) {
		event.preventDefault();
		$('html, body').stop().animate({
				scrollTop: ($('#portfolio-scroll').offset().top - 50)
		}, 1250, 'easeInOutExpo');
	}
});
