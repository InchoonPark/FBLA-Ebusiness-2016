Template.RegisterEvent.onRendered(() => {
  //initializes datepicker input
  $('.datepicker').datepicker({startDate: '3d', orientation: 'bottom auto'});

  //initializes clockpicker input
  $('.clockpicker').clockpicker();

  //formats card number and cvc inputs live with Stripe jquery.payment library
  $('input[name=card-number]').payment('formatCardNumber');
  $('input[name=cvc]').payment('formatCardCVC');
});

Template.RegisterEvent.events({
  "submit form": function(event) {
    event.preventDefault();
    //get event related input
    const name = $('input[name=event-name]').val();
    const date = $('input[name=date]').val();
    const participantNum = $('input[name=participant-num]').val();
    const startingTime = $('input[name=starting-time]').val();
    const endingTime = $('input[name=ending-time]').val();
    const packages = $('input[name=packages]').val();
    const eventData = { name, date, participantNum, startingTime, endingTime, packages };

    //if user already has Stripe token
    if(Meteor.user().stripeToken) {
      Meteor.call('registerEvent', eventData, 'dennis092899@gmail.com', Meteor.user().stripeToken, function(error, result) {
        if(error) {
          toastr.error(error.reason);
        } else if(result) {
          toastr.error('Sorry but an unexpected error occurred. Please try again!');
        } else {
          toastr.success('Your event has been successfully created! Please check your email to confirm event details!');
        }
      });
    }

    //get user related input
    const email = $('input[name=email]').val();
    const cardHolderName = $('input[name=card-holder-name]').val();
    const saveInfo = $('input[name=save-info]').val();

    //get credit card related input
    const number = $('input[name=card-number]').val();
    const exp_month = $('select[name=expiry-month]').val();
    const exp_year = $('select[name=expiry-year]').val();
    const cvc = $('input[name=cvc]').val();
    const financialInfo = { number, cvc, exp_month, exp_year };

    //validate credit card related input
    if (!$.payment.validateCardNumber(number)) {
      toastr.error('The credit card number is invalid. Please try again!');
      return;
    }
    if (!$.payment.validateCardExpiry(exp_month, exp_year)) {
      toastr.error('The expiry values have an error. Please try again!');
      return;
    }
    if (!$.payment.validateCardCVC(cvc)) {
      toastr.error('The CVC value has an error. Please try again!');
      return;
    }

    Stripe.card.createToken(financialInfo, function(status, response) {
    	const stripeToken = response.id;
      if(saveInfo) {
        Meteor.call('addStripeToken', stripeToken, function(error, result) {
          if(error) {
            throw new Meteor.Error(error.reason);
          }
        });
      }
      Meteor.call('registerEvent', eventData, email, stripeToken, function(error, result) {
        if(error) {
          toastr.error(error.reason);
        } else if(result) {
          toastr.error('Sorry but an unexpected error occurred. Please try again!');
        } else {
          toastr.success('Your event has been successfully created! Please check your email to confirm event details!');
        }
      });
    });
  }
});
