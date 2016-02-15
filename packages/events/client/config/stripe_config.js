Meteor.startup(function() {
  Stripe.setPublishableKey(Meteor.settings.public.StripeTestPublicKey);
});
