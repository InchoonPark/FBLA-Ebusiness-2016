const Stripe = StripeAPI(Meteor.settings.StripeTestSecretKey);
const handleCharge = Meteor.wrapAsync(Stripe.charges.create, Stripe.charges);

Meteor.methods({
  registerEvent(eventData, email, stripeToken) {
    /*check(eventData, {
      name: String,
      date: Date,
      participantNum: Number,
      startingTime: String,
      endingTime: String,
      packages: String
    });*/
    check(stripeToken, String);

    if(eventData.packages === 'basic') {
      eventData.cost = Math.ceil(eventData.participantNum / 10) * 10 * 16;
    } else if(eventData.packages === 'plus') {
      eventData.cost = Math.ceil(eventData.participantNum / 10) * 180;
    } else if(eventData.packages === 'premium') {
      eventData.cost = Math.ceil(eventData.participantNum / 10) * 240;
    } else {
      throw new Meteor.Error('package-invalid', 'The package you requested was invalid. Please try again!');
    }

    Events.insert({
      title: eventData.name,
      start: eventData.startTime,
      end: eventData.endTime,
      packages: eventData.packages,
      participantNum: eventData.participantNum
    });

    const charge = {
      amount: eventData.cost,
      currency: 'usd',
      source: stripeToken
    }

    const payment = handleCharge(charge);
    return payment;
  }
});
