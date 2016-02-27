Package.describe({
  name: 'thegoldencandle:static',
  version: '0.0.1',
  summary: '',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('templating', 'client');
  api.use('dennispark:owl-carousel-1@0.0.1', 'client');
  api.use('timmyg:wow@1.0.1', 'client');
  api.addFiles('modals/login_required.html', 'client');
  api.addFiles('modals/modal.css', 'client');
  api.addFiles('about.css', 'client');
  api.addFiles('about.html', 'client');
  api.addFiles('about.js', 'client');
  api.addFiles('contact.html', 'client');
  api.addFiles('guarantees.html', 'client');
  api.addFiles('mission_statement.html', 'client');
  api.addFiles('policies.html', 'client');
});
