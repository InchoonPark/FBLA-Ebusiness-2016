Template.PastEvents.onCreated(function() {
  this.subscribe("pastEvents");
});

Template.PastEvents.helpers({
  "events": function() {
    return Events.find();
  }
});
