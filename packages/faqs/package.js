Package.describe({
  name: 'thegoldencandle:faqs',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('templating', 'client');
  api.use('bambattajb:sticky@1.1.1', 'client');
  api.use('chrismbeckett:toastr@2.1.2_1', 'client');
  api.addFiles('faqs.html', 'client');
  api.addFiles('faqs.js', 'client');
});
