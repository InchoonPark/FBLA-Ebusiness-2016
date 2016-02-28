Package.describe({
  name: 'thegoldencandle:events',
  version: '0.0.1',
  summary: 'Contains templates about the creation and display of events',
});

Package.onUse(function(api) {
  const both = ['client', 'server'];
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('templating', 'client');
  api.use('check', 'server');
  api.use('andrasph:clockpicker@0.0.2', 'client');
  api.use('kadira:flow-router@2.10.1', 'client');
  api.use('jeffpatzer:jquery-payment@0.0.5', 'client');
  api.use('gquemart:meteor-reactive-fullcalendar@1.0.1', 'client');
  api.use('rajit:bootstrap3-datepicker@1.5.1','client');
  api.use('mrgalaxy:stripe@2.2.1', both);
  api.use('chrismbeckett:toastr@2.1.2', 'client');
  api.use('matb33:collection-hooks@0.8.1', both);
  api.addFiles('client/config/stripe_config.js', 'client');
  api.addFiles('client/calendar/calendar.css', 'client');
  api.addFiles('client/calendar/calendar.html', 'client');
  api.addFiles('client/calendar/calendar.js', 'client');
  api.addFiles('client/past_events/past_events.html', 'client');
  api.addFiles('client/past_events/past_events.js', 'client');
  api.addFiles('client/register_event/register_event.html', 'client');
  api.addFiles('client/register_event/register_event.js', 'client');
  api.addFiles('client/upcoming_events/upcoming_events.html', 'client');
  api.addFiles('client/upcoming_events/upcoming_events.js', 'client');
  api.addFiles('lib/events.js', both);
  api.addFiles('server/methods.js', 'server');
  api.addFiles('server/pubs.js', 'server');
  api.addFiles('server/fixtures.js', 'server');
  api.export('Events', both);
});
