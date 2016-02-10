Template.Home.events({
	"click a.page-scroll": function(event){
		var $anchor = $(this);
		$('.body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top - 50)
		}, 1250, 'easeInOutExpo');
		event.preventDefault();
	}
});

Template.Home.helpers({

});

Template.Home.onRendered(function() {
	this.$('.overlay').vide('/camera', {
		className: 'vide',
		
	});
});