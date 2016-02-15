Meteor.publish("pastEvents", function() {
  let ownerId = this.userId;
  return Events.find({ ownerId: ownerId });
});
