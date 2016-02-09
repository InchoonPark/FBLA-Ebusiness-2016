Meteor.publish("allUpcomingEvents", function() {
  return Events.find();
});

Meteor.publish("userUpcomingEvents", function(userId) {
  return Events.find({ ownerId: userId });
});

Meteor.publish("userPastEvents", function(userId) {
  var currentDate = Date.now();
  return Events.find({
    ownerId: userId,
    createdAt: {
      $gte: currentDate
    }
  });
});
