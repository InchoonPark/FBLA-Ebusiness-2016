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
  api.use('dennispark:owl-carousel-1@0.0.1', 'client');
  api.use('timmyg:wow@1.0.1', 'client');
  api.addFiles('config/main.css', 'client');
  api.addFiles('config/toastr.js', 'client');
  api.addFiles('layouts/master_layout.html', 'client');
  api.addFiles('navs/footer.css', 'client');
  api.addFiles('navs/footer.html', 'client');
  api.addFiles('navs/landing_navbar.html', 'client');
  api.addFiles('navs/landing_navbar.js', 'client');
  api.addFiles('navs/navbar.css', 'client');
  api.addFiles('navs/navbar.html', 'client');
  api.addFiles('static/about.css', 'client');
  api.addFiles('static/about.html', 'client');
  api.addFiles('static/about.js', 'client');
  api.addFiles('static/contact.html', 'client');
  api.addFiles('static/guarantees.html', 'client');
  api.addFiles('static/mission_statement.html', 'client');
  api.addFiles('static/policies.html', 'client');
  api.addFiles('routes.js', 'client');
  api.addFiles('styles/bootstrap_overrides.css', 'client');
  api.addFiles('styles/button.css', 'client');
  api.addFiles('styles/hr.css', 'client');
  api.addFiles('styles/text.css', 'client');
  api.addFiles('styles/utility.css', 'client');
  api.addFiles('static/copyright.html', 'client');
});
