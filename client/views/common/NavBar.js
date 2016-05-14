// Template.NavBar.onRendered(function(){
//   var initialHeight = $(".jumbotron").height() + 40;
//   $navbar = $('.navbar');
//    $(document).scroll(function() {
//      var opacity = $(this).scrollTop() / initialHeight;
//        $navbar.css({
//            "background": "rgba(0,0,0," + opacity + ")"
//        });
//    });
// });

Template.NavBar.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe("users");
	});
});

Template.NavBar.helpers({
  user: function(){
    return Meteor.user().emails[0].address;
  }
});

Template.NavBar.events({
  'click .login-toggle': ()=> {
    Session.set('nav-toggle', 'open');
  },
  'click .logout': ()=> {
    Meteor.logout();
  },
});
