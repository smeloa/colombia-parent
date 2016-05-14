Meteor.publish('recursos', function() {
  return Recursos.find({});
});

Meteor.publish("users", function(){
  return Meteor.users.find({},{fields:{emails:1}})
});
