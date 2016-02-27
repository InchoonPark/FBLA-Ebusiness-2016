Package.describe({
  name: 'thegoldencandle:gallery',
  version: '0.0.1',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('templating', 'client');
  api.use('gabrielengel:konecty-magnific-popup@0.9.9', 'client');
  api.addFiles('gallery.html', 'client');
  api.addFiles('gallery.js', 'client');
});
