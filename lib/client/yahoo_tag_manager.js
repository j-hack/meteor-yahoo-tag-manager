var getSettingsNamespace = function() {
  return Meteor.settings &&
            Meteor.settings.public &&
            Meteor.settings.public.yahooTagManager || {};
};

var getYahooTagManagerId = function() {
  var settings = getSettingsNamespace();
  return settings.id;
};

var buildYahooTagManagerScript = function() {
  var tagId = getYahooTagManagerId();
  if (tagId) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    var s = '(function () {' +
      'var tagjs = document.createElement("script");' +
      'var s = document.getElementsByTagName("script")[0];' +
      'tagjs.async = true;' +
      'tagjs.src = "//s.yjtag.jp/tag.js#site=' + tagId + '";' +
      's.parentNode.insertBefore(tagjs, s);' +
    '}());';
    script.innerHTML = s;
    return script;
  }
};

var buildYahooTagManagerNoScript = function() {
  var tagId = getYahooTagManagerId();
  if (tagId) {
    var noscript = document.createElement('noscript');
    var iframe = document.createElement('iframe');
    iframe.src = '//b.yjtag.jp/iframe?c=' + tagId;
    iframe.width = '1';
    iframe.height = '1';
    iframe.frameborder = '0';
    iframe.scrolling = 'no';
    iframe.marginheight = '0';
    iframe.marginwidth = '0';
    noscript.appendChild(iframe);
    return noscript;
  }
};

var appendToBody = function() {
  if (getYahooTagManagerId()) {
    document.body.appendChild(buildYahooTagManagerScript());
    document.body.appendChild(buildYahooTagManagerNoScript());
  };
};

YahooTagManager = {
  getSettingsNamespace: getSettingsNamespace,
  getYahooTagManagerId: getYahooTagManagerId,
  buildYahooTagManagerScript: buildYahooTagManagerScript,
  buildYahooTagManagerNoScript: buildYahooTagManagerNoScript,
  appendToBody: appendToBody
};