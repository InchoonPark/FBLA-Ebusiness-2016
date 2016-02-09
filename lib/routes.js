FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('MasterLayout', { main: 'Home' });
  },
  name: 'home'
});

FlowRouter.route('/about', {
  action: function() {
    BlazeLayout.render('MasterLayout', { main: 'About' });
  },
  name: 'about'
});

FlowRouter.route('/gallery', {
  action: function() {
    BlazeLayout.render('MasterLayout', { main: 'Gallery '});
  },
  name: 'gallery'
});

FlowRouter.route('/calendar', {
  action: function() {
    BlazeLayout.render('MasterLayout', { main: 'Calendar' });
  },
  name: 'calendar'
});

FlowRouter.route('/contact', {
  action: function() {
    BlazeLayout.render('MasterLayout', { main: 'Contact' });
  },
  name: 'contact'
});

FlowRouter.route('/register-event', {
  action: function() {
    BlazeLayout.render('MasterLayout', { main: 'RegisterEvent' });
  },
  name: 'register.event'
});

FlowRouter.route('/dashboard', {
  action: function() {
    BlazeLayout.render('MasterLayout', { main: 'Dashboard' });
  },
  name: 'dashboard'
});
