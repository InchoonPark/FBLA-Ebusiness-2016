Events = new Meteor.Collection("events");

Events.before.insert(function (userId, doc) {
  doc.ownerId = userId;
  doc.createdAt = Date.now();
});
