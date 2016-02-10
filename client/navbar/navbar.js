Template.Navbar.onRendered( function() {
	var docElem = document.documentElement,
	header = document.querySelector( '.navbar-fixed-top' ),
	didScroll = false,
	changeHeaderOn = 200;
	console.log('rendered');

	function init() {
		console.log("init running");
		//$('window').on('scroll', function() {
		window.addEventListener('scroll', function() {
			console.log("scrolling!");
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		});
	}

	function scrollPage() {
		var sy = window.pageYOffset || docElem.scrollTop;
		console.log("scroll running");
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
