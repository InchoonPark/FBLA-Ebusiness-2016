Package.describe({
  name: 'thegoldencandle:main',
  version: '0.0.1',
  summary: 'Handles master styles, libraries, and routing. Contains dumb templates.',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('templating', 'client');
  api.use('zimme:active-route@2.3.2', 'client');
  api.use('kadira:flow-router@2.10.1', 'client');
  api.use('kadira:blaze-layout@2.3.0', 'client');
  api.use('okgrow:router-autoscroll@0.1.6', 'client');
  api.addFiles('config/main.css', 'client');
  api.addFiles('config/toastr.js', 'client');
  //api.addFiles('layouts/dashboard_layout.html', 'client');
  api.addFiles('layouts/master_layout.html', 'client');
  //api.addFiles('navs/dashboard_navbar.html', 'client');
  api.addFiles('navs/footer.css', 'client');
  api.addFiles('navs/footer.html', 'client');
  api.addFiles('navs/landing_navbar.html', 'client');
  api.addFiles('navs/landing_navbar.js', 'client');
  api.addFiles('navs/navbar.css', 'client');
  api.addFiles('navs/navbar.html', 'client');
  //api.addFiles('routes/dashboard_routes.js', 'client');
  api.addFiles('routes/event_routes.js', 'client');
  api.addFiles('routes/static_routes.js', 'client');
  api.addFiles('styles/bootstrap_overrides.css', 'client');
  api.addFiles('styles/button.css', 'client');
  api.addFiles('styles/hr.css', 'client');
  api.addFiles('styles/text.css', 'client');
  api.addFiles('styles/utility.css', 'client');
});
