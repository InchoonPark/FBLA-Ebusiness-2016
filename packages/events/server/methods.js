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

    if(eventData.packages === '160') {
      eventData.cost = Math.ceil(eventData.participantNum / 10) * 10 * 16;
    } else if(eventData.packages === '180') {
      eventData.cost = Math.ceil(eventData.participantNum / 10) * 180;
    } else if(eventData.packages === '240') {
      eventData.cost = Math.ceil(eventData.participantNum / 10) * 240;
    } else if(eventData.packages === '') {
      eventData.cost = 0;
    } else {
      throw new Meteor.Error('package-invalid', 'The package you requested was invalid. Please try again!');
    }

    const sameDayEvent = Events.findOne({ start: eventData.startTime });
    if(sameDayEvent) {
      throw new Meteor.Error('same-day-event', 'Sorry, but ${sameDayEvent.name} is on the same day. Please try another date!');
    }

    Events.insert({
      title: eventData.name,
      start: eventData.startTime,
      end: eventData.endTime,
      packages: eventData.packages,
      participantNum: eventData.participantNum,
      groupName: eventData.groupName,
      description: eventData.description
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
