Meteor.publish('recursos', function() {
  return Recursos.find({});
});
