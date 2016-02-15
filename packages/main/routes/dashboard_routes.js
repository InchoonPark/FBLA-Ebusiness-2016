FlowRouter.route('/dashboard', {
  action: function() {
    BlazeLayout.render('DashboardLayout', { main: 'UpcomingEvents' });
  },
  name: 'dashboard'
});

FlowRouter.route('/dashboard/account', {
  action: function() {
    BlazeLayout.render('MasterLayout', { main: 'DashboardAccount' });
  },
  name: 'dashboard.account'
});

FlowRouter.route('/dashboard/past-events', {
  action: function() {
    BlazeLayout.render('MasterLayout', { main: 'DashboardPastEvents '});
  },
  name: 'dashboard.past.events'
});
