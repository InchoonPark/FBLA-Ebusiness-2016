Template.Video.events({
	"click a.page-scroll": function(event){
		var $anchor = $(this);
		$('.body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top - 50)
		}, 1250, 'easeInOutExpo');
		event.preventDefault();
	}
});

Template.Video.onRendered(function() {
	this.$('.overlay').vide('https://thegoldencandle.s3-us-west-1.amazonaws.com/assets/video/landing-video.mp4', {
		className: 'vide',
	});
});
