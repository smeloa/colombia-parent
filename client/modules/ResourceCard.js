import moment from 'moment-timezone';

Template.ResourceCard.helpers({
  dateFormat: function() {
    return moment(this.fecha).tz("Europe/London").format('MMMM Do YYYY')
  },
  // isTheatre: function(clase) {
  //   return clase === "Teatro";
  // },
  isActivity: function(clase) {
      if (clase === "Teatro") {
        return '../img/teatro500250.jpg';
      } else {
        return 'http://placehold.it/500x250/EEE';
      }
  }
});
