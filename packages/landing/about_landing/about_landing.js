Template.AboutLanding.onRendered(function() {
	new WOW().init();
	smoothScroll.init();
});
Template.AboutLanding.helpers({
	'styleHeight': function() {
		var screenHeight = window.innerHeight;
		var endStatement = "margin-top: " + screenHeight + "px";
		return {
			style: endStatement
		}
	}
});
