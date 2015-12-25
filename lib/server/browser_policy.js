Meteor.startup(function() {
  if (typeof BrowserPolicy === 'undefined') { return; }

  BrowserPolicy.content.allowScriptOrigin('s.yjtag.jp');
  BrowserPolicy.content.allowFrameOrigin('b.yjtag.jp');

  // Used by debugger for whatever reason...
  // BrowserPolicy.content.allowOriginForAll('tagmanager.google.com');

  // gtm.js contains eval... ugh
  // BrowserPolicy.content.allowEval();
});