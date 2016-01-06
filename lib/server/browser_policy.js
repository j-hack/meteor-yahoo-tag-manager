if (Package["browser-policy-common"]) {
  var content = Package['browser-policy-common'].BrowserPolicy.content;
  if (content) {
    content.allowOriginForAll('s.yjtag.jp');
    content.allowOriginForAll('b.yjtag.jp');
    content.allowOriginForAll('s.thebrighttag.com');
  }
}