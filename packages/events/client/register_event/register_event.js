Template.RegisterEvent.onRendered(function() {
  //initializes datepicker
  $('.datepicker').datepicker();

  $('input[name=card-number]').payment('formatCardNumber');
  $('input[name=cvc]').payment('formatCardCVC');

});

Template.RegisterEvent.events({
  "submit form": function(event) {
    event.preventDefault();
    const cardHolderName = $('input[name=card-holder-name]').val();
    const cardNumber = $('input[name=card-number]').val();
    const expiryMonth = $('select[name=expiry-month]').val();
    const expiryYear = $('select[name=expiry-year]').val();
    const cvc = $('input[name=cvc]').val();

    if (!$.payment.validateCardNumber(cardNumber)) {
      toastr.error('The credit card number is invalid. Please try again!');
      return;
    }
    if (!$.payment.validateCardExpiry(expiryMonth, expiryYear)) {
      toastr.error('The expiry values have an error. Please try again!');
      return;
    }
    if (!$.payment.validateCardCVC(cvc)) {
      toastr.error('The CVC value has an error. Please try again!');
      return;
    }

    const name = $('input[name=event-name]').val();
    const date = $('input[name=date]').val();
    const participantNum = $('input[name=participant-num]').val();
    const startingTime = $('input[name=starting-time]').val();
    const endingTime = $('input[name=ending-time]').val();
    const packages = $('input[name=packages]').val();
    const eventData = { name, date, participantNum, startingTime, endingTime, packages };

    Stripe.card.createToken({
    	number: cardNumber,
    	cvc: cvc,
    	exp_month: expiryMonth,
    	exp_year: expiryYear,
    }, function(status, response) {
    	const stripeToken = response.id;
      Meteor.call("registerEvent", eventData, stripeToken, function(error, result) {

      });
    });
  }
});
