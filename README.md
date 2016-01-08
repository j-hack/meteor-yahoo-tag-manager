# meteor-yahoo-tag-manager

Yahoo! Tag Manager for Meteor app

# setup

1) Add this package

```bash
meteor add jhack:yahoo-tag-manager
```

2) Write settings.json

```json
{
  "public": {
    "yahooTagManager": {
      "id": "YOUR_YAHOO_TAG_MANAGER_ID"
    }
  }
}
```

3) Add code below (client-side only)

```js
if (Meteor.isClient) {
  Meteor.startup(function() {
    YahooTagManager.appendToBody();
  });
}
```

4) Run app with --settings option

```bash
meteor run --settings settings.json
```

# License

MIT LICENSE
