import moment from 'moment-timezone';
import numeral from 'numeral';

Template.ResourceCard.helpers({
  dateFormatStart: function() {
    return moment(this.fechaStart).tz("Europe/London").format('MMMM Do YYYY');
  },
  dateFormatEnd: function() {
    return moment(this.fechaEnd).tz("Europe/London").format('MMMM Do YYYY')
  },
  costCurrency: function() {
    return numeral(this.costo).format('0,0');
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
