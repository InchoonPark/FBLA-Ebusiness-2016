Package.describe({
  name: 'thegoldencandle:landing',
  version: '0.0.1',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('jquery', 'client');
  api.use('templating', 'client');
  api.use('dennispark:owl-carousel-1@0.0.1', 'client');
  api.use('gabrielengel:konecty-magnific-popup@0.9.9', 'client');
  api.use('iamkevingreen:mixitup@2.1.7', 'client');
  api.use('mrt:jquery-easing@1.3.0', 'client');
  api.use('natestrauser:animate-css@3.4.0', 'client');
  api.use('slam310:smooth-scroll@0.0.5', 'client');
  api.use('timmyg:wow@1.0.1', 'client');
  api.use('vodkabears:vide@0.5.0', 'client');
  api.addFiles('libraries/acore.js', 'client');
  api.addFiles('libraries/transition.js', 'client');
  api.addFiles('about_landing/about_landing.css', 'client');
  api.addFiles('about_landing/about_landing.html', 'client');
  api.addFiles('about_landing/about_landing.js', 'client');
  api.addFiles('carousel_portfolio/carousel_portfolio.html', 'client');
  api.addFiles('carousel_portfolio/carousel_portfolio.js', 'client');
  api.addFiles('no_js/pricing_boxes.html', 'client');
  api.addFiles('no_js/services.html', 'client');
  api.addFiles('testimonials/testimonials.css', 'client');
  api.addFiles('testimonials/testimonials.html', 'client');
  api.addFiles('testimonials/testimonials.js', 'client');
  api.addFiles('video/video.css', 'client');
  api.addFiles('video/video.html', 'client');
  api.addFiles('video/video.js', 'client');
  api.addFiles('landing.css', 'client');
});
