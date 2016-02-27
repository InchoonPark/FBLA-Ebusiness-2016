const Stripe = StripeAPI(Meteor.settings.StripeTestSecretKey);
const createCustomer = Meteor.wrapAsync(Stripe.customers.create, Stripe.customers);

Meteor.methods({
  addStripeToken(stripeToken) {
    check(stripeToken, String);
    //check if user is logged in
    if(!this.userId) {
      throw new Meteor.Error('not-logged-in', 'You must be logged in to save credit card information to your account!');
    }

    Users.update({ _id: this.userId }, { $set: { stripeToken: stripeToken } });
  }
});
