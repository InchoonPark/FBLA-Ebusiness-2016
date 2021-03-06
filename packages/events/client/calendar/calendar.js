Template.Calendar.onCreated(() => {
  let template = Template.instance();
  template.subscribe("allEvents");
  return Events.find();
});

Template.Calendar.onRendered(function () {
});

Template.Calendar.helpers({
  calendarOptions() {
    return {
      hiddenDays: [ 0 ],
      width: '300px',
      slotDuration: '01:00:00',
      minTime: '08:00:00',
      maxTime: '19:00:00',
      eventColor: '#ffc153',
      // Function providing events reactive computation for fullcalendar plugin
      events: function(start, end, timezone, callback) {
        var eventCursor = Events.find();
        var events = eventCursor.fetch();
        callback(events);
      },
    }
  }
});

Template.Calendar.events({
  "click [data-action=register-event]": function() {
      FlowRouter.go("register.event");
  }
});
