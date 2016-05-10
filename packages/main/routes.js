FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('Landing');
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
    BlazeLayout.render('MasterLayout', { main: 'Gallery' });
  },
  name: 'gallery'
});

FlowRouter.route('/contact', {
  action: function() {
    BlazeLayout.render('MasterLayout', { main: 'Contact' });
  },
  name: 'contact'
});

FlowRouter.route('/mission-statement', {
  action: function() {
    BlazeLayout.render('MasterLayout', { main: 'MissionStatement' });
  },
  name: 'mission.statement'
});

FlowRouter.route('/guarantees', {
  action: function() {
    BlazeLayout.render('MasterLayout', { main: 'Guarantees' });
  },
  name: 'guarantees'
});

FlowRouter.route('/policies', {
  action: function() {
    BlazeLayout.render('MasterLayout', { main: 'Policies' });
  },
  name: 'policies'
});

FlowRouter.route('/faqs', {
  action: function() {
    BlazeLayout.render('MasterLayout', { main: 'Faqs' });
  },
  name: 'faqs'
});

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

FlowRouter.route('/reviews', {
  action: function() {
    BlazeLayout.render('MasterLayout', { main: 'Reviews '});
  },
  name: 'reivews'
});
