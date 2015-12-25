getSettingsNamespace = function() {
  return Meteor.settings && Meteor.settings.public && Meteor.settings.public.ytm || {};
};

getYahooTagManagerId = function() {
  var settings = getSettingsNamespace();
  return settings.id;
};

Template.yahooTagManager.helpers({
  hasYTMId: function() {
    return typeof getYahooTagManagerId() !== 'undefined';
  },

  getYTMId: function() {
    return getYahooTagManagerId();
  }
});
