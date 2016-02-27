Package.describe({
  name: 'thegoldencandle:accounts',
  version: '0.0.1',
});

Package.onUse(function(api) {
  const both = ['client', 'server'];
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('accounts-password', both);
  api.use('accounts-google', both);
  api.use('accounts-facebook', both);
  api.use('check', 'server');
  api.use('useraccounts:bootstrap@1.13.1', both);
  api.use('useraccounts:flow-routing@1.13.1', both);
  api.use('mrgalaxy:stripe@2.2.1', 'server');
  api.addFiles('at_config.js', 'client');
  api.addFiles('subs.js', 'client');
  api.addFiles('users.js', both);
  api.addFiles('pubs.js', 'server');
  api.addFiles('methods.js', 'server');
});
