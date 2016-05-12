Meteor.publish('recursos', function() {
  return Recursos.find({});
});
//
// Meteor.publish('recursos', function() {
//   return Recursos.find({recursos.fechaEnd > Date.now()});
// });
