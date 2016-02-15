Package.describe({
  name: 'thegoldencandle:static',
  version: '0.0.1',
  summary: '',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('templating', 'client');
  api.addFiles('modals/login_required.html', 'client');
  api.addFiles('modals/modal.css', 'client');
  api.addFiles('about.html', 'client');
  api.addFiles('contact.html', 'client');
});
