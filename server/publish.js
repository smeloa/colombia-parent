Meteor.publish('recursos', function() {
  return Recursos.find({});
});

// Meteor.publish('recursos', function() {
//   let today = new Date();
//   return Recursos.find({ 'recursos.fechaEnd': { $gt: today }});
// });
