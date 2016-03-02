Template.RegisterEvent.onCreated(function() {
  this.currentPeople = new ReactiveVar(0);
  this.currentPackage = new ReactiveVar(0);
  this.currentTimeSpan = new ReactiveVar(1);
  this.currentTotalCost = new ReactiveVar(0);
});

Template.RegisterEvent.onRendered(() => {
  //initializes datepicker input

  $('.datepicker').datepicker({startDate: '3d', orientation: 'bottom auto'});

  //initializes clockpicker input
  $('.clockpicker').clockpicker();

  $('input[name="ending-time"]').on('change', function() {
    var startTime = $('input[name="starting-time"]').val();
    var endTime = $('input[name="ending-time"]').val();
    var hour1 = Number(startTime.substring(0,2));
    var hour2 = Number(endTime.substring(0,2));
    var min1 = Number(startTime.substring(3));
    var min2 = Number(endTime.substring(3));
    if(hour1 == NaN || hour2 == NaN || min1 == NaN || min2 == NaN || hour1 > 23 || hour2 > 23 || min1 > 59  || min2 > 59){
      toastr.error("Please input valid times");
      return;
    }

    var hours = hour2 - hour1;

    var mins = min2 - min1;
    if(mins < 0){
      hours--;
      mins += 60;
    }
    if(hours < 0){
      toastr.error('Please make sure that the ending time is after the beginning time.');
      return;
    }
    if(mins>0){
      hours++;
    }
    this.currentTimeSpan.set(hours);
  });


  //formats card number and cvc inputs live with Stripe jquery.payment library
  $('input[name=card-number]').payment('formatCardNumber');
  $('input[name=cvc]').payment('formatCardCVC');

  $("#prices").sticky({
    topSpacing: 90,
    bottomSpacing: 600
  });
});


Template.RegisterEvent.events({
  "submit form": function(event) {
    event.preventDefault();
    //get event related input
    const name = $('input[name=event-name]').val();
    const date = $('input[name=date]').val();
    const participantNum = Number($('input[name=participant-num]').val());
    const startingTime = $('input[name=starting-time]').val();
    const endingTime = $('input[name=ending-time]').val();
    const packages = $('label.active').attr('for');
    const groupName = $('input[name=group-name]').val();
    const description = $('input[name=description]').val();

    if(!name){
      toastr.error('Please enter an event name.');
      return;
    }
    if(!date){
      toastr.error('Please enter the date of your event.');
      return;
    }
    if(!participantNum){
      toastr.error('Please specify number of participants.');
      return;
    }
    if(!startingTime){
      toastr.error('Please specify the beginning time of your event');
      return;
    }
    if(!endingTime){
      toastr.error('Please specify the ending time of your event');
      return;
    }

    var startTime = "T" + startingTime + ":00";
    var endTime = "T" + endingTime + ":00";

    var eventMonth = date.substring(0,2);
    var eventDay = date.substring(3,5);
    var eventYear = date.substring(6);
    var eventDate = eventYear + "-" + eventMonth + "-" + eventDay;

    var startTime = new Date(eventDate + startTime);
    var endTime = new Date(eventDate + endTime);

    if(startTime == "Invalid Date" || endTime == "Invalid Date"){
      toastr.error('Please input a valid date and time.');
      return;
    }

    const eventData = { name, participantNum, startTime, endTime, packages, groupName, description};

    //if user already has Stripe token
    if(Meteor.user() && Meteor.user().stripeToken) {
      Meteor.call('registerEvent', eventData, Meteor.user().emails[0].address, Meteor.user().stripeToken, function(error, result) {
        if(error) {
          toastr.error(error.reason);
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
        } else {
          toastr.success('Your event has been successfully created! Please check your email to confirm event details!');
        }
      });
    });
  },
  'click input[name=packages]': function(event, template) {
    const packageValue = event.currentTarget.value;
    const labelFor = event.currentTarget.id;
    const $currentLabel = $('label[for=' + labelFor + ']');

    if(template.currentPackage.get() == packageValue) {
      template.currentPackage.set(0);
      $currentLabel.html('Add to order');
      $currentLabel.removeClass('activeOrder');
    } else {
      template.currentPackage.set(packageValue);
      $('.add-to-order').removeClass('activeOrder');
      $currentLabel.html('Added!');
      $currentLabel.addClass('activeOrder');
    }
  },
  'blur input[name="participant-num"]': function(event, template) {
    if(event.target.value == NaN){
      toastr.error('Please make sure the input is a number');
      return;
    }
    template.currentPeople.set(event.target.value);
  },
  'input input[name="ending-time"]': function(event, template) {
    var startTime = $('input[name="starting-time"]').val();
    var endTime = $('input[name="ending-time"]').val();
    var hour1 = Number(startTime.substring(0,2));
    var hour2 = Number(endTime.substring(0,2));
    var min1 = Number(startTime.substring(3));
    var min2 = Number(endTime.substring(3));
    if(hour1 == NaN || hour2 == NaN || min1 == NaN || min2 == NaN || hour1 > 23 || hour2 > 23 || min1 > 59  || min2 > 59){
      toastr.error("Please input valid times");
      return;
    }

    var hours = hour2 - hour1;

    var mins = min2 - min1;
    if(mins < 0){
      hours--;
      mins += 60;
    }
    if(hours < 0){
      toastr.error('Please make sure that the ending time is after the beginning time.');
      return;
    }
    if(mins>0){
      hours++;
    }
    template.currentTimeSpan.set(hours);
  }
});

Template.RegisterEvent.helpers({
  'totalCost': function(){
    var packagePrice = Number(Template.instance().currentPackage.get());
    var peopleCount = Number(Template.instance().currentPeople.get());
    var roundedCount = Math.ceil(peopleCount / 10);
    var hourlyRate = Template.instance().currentTimeSpan.get() * 300;
    var totalCost = packagePrice + roundedCount * hourlyRate;
    Template.instance().currentTotalCost.set(totalCost);
    return totalCost;
  },
  'taxCost': function() {
    var totalCost = Template.instance().currentTotalCost.get();

    var tax = totalCost * .10;
    return tax;
  },
  'finalCost': function() {
    var totalCost = Template.instance().currentTotalCost.get();
    var finalCost = totalCost * 1.10;
    finalCost = finalCost.toFixed(0);
    return finalCost;
  },
  'userEmail': function(){
    if(Meteor.user()){
      return Meteor.user().emails[0].address;
    }
  },
});
