Package.describe({
  name: 'jhack:yahoo-tag-manager',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Yahoo! Tag Manager for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/j-hack/meteor-yahoo-tag-manager.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.addFiles([
    'lib/client/yahoo_tag_manager.js'
  ], 'client');

  api.addFiles([
    'lib/server/browser_policy.js'
  ], 'server');

  api.export('YahooTagManager', 'client');
});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('nobutakaoshiro:yahoo-tag-manager');
//   api.addFiles('yahoo_tag_manager_tests.js');
// });
