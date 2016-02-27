Template.LandingNavbar.onRendered( function() {
	var docElem = document.documentElement,
	header = document.querySelector( '.navbar-fixed-top' ),
	didScroll = false,
	changeHeaderOn = 200;

	function init() {
		window.addEventListener('scroll', function() {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		});
	}

	function scrollPage() {
		var sy = window.pageYOffset || docElem.scrollTop;
		if ( sy >= changeHeaderOn ) {
			$('#js-top-nav').removeClass('navbar-expanded');
		}
		else {
			$('#js-top-nav').addClass('navbar-expanded');
		}
		didScroll = false;
	}

	init();
});

Template.LandingNavbar.events({
	"click [data-action=page-scroll]"(event) {
		event.preventDefault();
		$('html, body').stop().animate({
				scrollTop: 0
		}, 1250, 'easeInOutExpo');
	}
});
