Template.Video.events({
	"click [data-action=page-scroll]"(event) {
		event.preventDefault();
		$('html, body').stop().animate({
				scrollTop: ($('#portfolio-scroll').offset().top - 50)
		}, 1250, 'easeInOutExpo');
	}
});

Template.Video.onRendered(() => {
	$(".video").vide('https://d2713zaslmgu0p.cloudfront.net/assets/video/landing-video.mp4');
});
