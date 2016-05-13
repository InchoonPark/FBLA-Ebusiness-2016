Template.Reviews.onRendered(() => {

});

Template.Reviews.events({
	'submit form'(event) {
		event.preventDefault();
		
		const email = $('input[name=email]').val();
		const reviewText = $('textarea[name=question]').val();

		if(!email){
			toastr.error("Please enter your email address!");
			return;
		}
		if(!reviewText){
			toastr.error("Make sure to write your review before submitting!");
			return;
		}
		toastr.success("Your review has been submitted. We will contact you for further information soon!");
		$('input[name=email]').val("");
		$('textarea[name=question]').val("");
	}
})