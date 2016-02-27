Meteor.publish('currentUserData', function() {
  if(this.userId) {
    console.log(this.userId);
    return Meteor.users.find({ _id: this.userId },
      {
        fields: {
          'stripeToken': 1
        }
      });
  } else {
    return this.ready();
  }
});
