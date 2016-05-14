Template.NavBar.onRendered(function(){
  var initialHeight = $(".jumbotron").height() + 40;
  $navbar = $('.navbar');
   $(document).scroll(function() {
     var opacity = $(this).scrollTop() / initialHeight;
       $navbar.css({
           "background": "rgba(0,0,0," + opacity + ")"
       });
   });
});

Template.NavBar.events({
  'click .login-toggle': ()=> {
    Session.set('nav-toggle', 'open');
  },
  'click .logout': ()=> {
    Meteor.logout();
  },
});
