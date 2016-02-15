FlowRouter.route('/calendar', {
  action: function() {
    BlazeLayout.render('MasterLayout', { main: 'Calendar' });
  },
  name: 'calendar'
});

FlowRouter.route('/register-event', {
  action: function() {
    BlazeLayout.render('MasterLayout', { main: 'RegisterEvent' });
  },
  name: 'register.event'
});
