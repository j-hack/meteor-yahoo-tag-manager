Package.describe({
  name: 'nobutakaoshiro:yahoo-tag-manager',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Install Yahoo! Tag Manager to Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nobutakaoshiro/meteor-yahoo-tag-manager.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'browser-policy'
  ]);

  api.addFiles([
    'lib/client/yahoo_tag_manager.html',
    'lib/client/yahoo_tag_manager.js',
    'lib/client/body.html',
  ], 'client');

  api.addFiles([
    'lib/server/browser_policy.js'
  ], 'server');
});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('nobutakaoshiro:yahoo-tag-manager');
//   api.addFiles('yahoo_tag_manager_tests.js');
// });
