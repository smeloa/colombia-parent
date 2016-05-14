Meteor.publish('recursos', function() {
  return Recursos.find({});
});

Meteor.publish("users", function(argument){
  return Meteor.users({},{fields:{emails:1}})
});
