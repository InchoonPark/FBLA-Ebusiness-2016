Template.UpcomingEvents.onCreated(function() {
  this.subscribe("upcomingEvents");
});

Template.UpcomingEvents.helpers({
  "events": function() {
    return Events.find();
  }
});
