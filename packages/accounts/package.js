Package.describe({
  name: 'thegoldencandle:accounts',
  version: '0.0.1',
  summary: '',
  git: ''
});

Package.onUse(function(api) {
  const both = ['client', 'server'];
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('accounts-password', both);
  api.use('accounts-facebook', both);
  api.use('useraccounts:bootstrap@1.13.1', both);
  api.use('useraccounts:flow-routing@1.13.1', both);
  api.addFiles('config/at_config.js', 'client');
});
