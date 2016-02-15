Meteor.methods({
  "registerEvent": function(eventData, stripeToken) {
    console.log(eventData);

    /*check(eventData.name, String);
    //check(eventData.date, Date);
    check(eventData.participantNum, Number);
    check(eventData.startingTime, String);
    check(eventData.endingTime, String);
    check(eventData.packages, String);
    check(stripeToken, String);*/


    switch(eventData.packages) {
      case 'basic':
        eventData.cost = Math.round(eventData.participantNum / 10) * 160;
      case 'plus':
        eventData.cost = Math.round(eventData.participantNum / 10) * 180;
      case 'premium':
        eventData.cost = Math.round(eventData.participantNum / 10) * 240;
    }

    console.log(eventData.cost);

    const Stripe = StripeAPI(Meteor.settings.StripeTestSecretKey);
    /*Stripe.charges.create({
      amount: eventData.cost,
      currency: 'usd',
      source: stripeToken
    }, function(error, charge) {
      if(error) {
        throw new Meteor.Error(error);
      } else {
        Events.insert(eventData);
      }
    });*/
  }
});
