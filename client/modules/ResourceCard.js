import moment from 'moment-timezone';

Template.ResourceCard.helpers({
  dateFormatStart: function() {
    return moment(this.fechaStart).format('DD/MM/YYYY')
  },
  dateFormatEnd: function() {
    return moment(this.fechaEnd).format('DD/MM/YYYY')
  },
  isActivity: function(clase) {
      if (clase === "Teatro") {
        return '../img/teatro500250.jpg';
      } else if (clase === "Concierto") {
        return '../img/concierto500250.jpg';
      } else if (clase === "Taller") {
        return '../img/taller500250.jpg';
      } else if (clase === "Otros") {
        return '../img/otros500250.jpg';
      } else {
        return 'http://placehold.it/500x250/EEE';
      }
  }
});
