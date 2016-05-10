Package.describe({
  name: 'thegoldencandle:reviews',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('templating');
  api.addFiles('reviews.html', 'client');
  api.addFiles('reviews.js', 'client');
});
