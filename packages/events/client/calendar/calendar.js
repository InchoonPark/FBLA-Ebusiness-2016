Template.Calendar.onCreated(() => {
  let template = Template.instance();
  template.subscribe("allEvents");
  return Events.find();
});

Template.Calendar.helpers({
  calendarOptions() {
    return {
      hiddenDays: [ 0 ],
      width: '300px',
      slotDuration: '01:00:00',
      minTime: '08:00:00',
      maxTime: '19:00:00',
      // Function providing events reactive computation for fullcalendar plugin
      events: function(start, end, timezone, callback) {
        var eventCursor = Events.find();
        var events = eventCursor.fetch();
        console.log(events);
        callback(events);
      },
    }
  }
});

Template.Calendar.events({
  "click [data-action=register-event]": function() {
    if(Meteor.user()) {
      FlowRouter.go("register.event");
    } else {
      var view = Blaze.render(Template.LoginRequiredModal, document.body);
      var domRange = view._domrange;
      var loginRequiredModal = domRange.$('.modal');
      loginRequiredModal.modal();
    }
  }
});
