import moment from 'moment';

var moment = require('moment-timezone');

Template.ResourceCard.helpers({
  dateFormat: function() {
    return moment(this.fecha).tz("America/Bogota").format('MMMM Do YYYY, h:mm a')
  }
});
