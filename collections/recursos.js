Recursos = new Mongo.Collection('recursos');

RecursosIndex = new EasySearch.Index({
  collection: Recursos,
  fields: ['nombre'],
  engine: new EasySearch.MongoDB({
    sort: () => ['nonmbre']
  })
});

if (Meteor.isServer) {
  Recursos.allow({
    insert: function(userId, doc) {
      return !!userId;
    },
    update: function(userId, doc) {
      return !!userId;
    }
  });
}

RecursosSchema = new SimpleSchema({
  nombre: {
    type: String,
    label: "Nombre"
  },
  descripcion: {
    type: String,
    label: "Descripcion"
  },
  clase: {
    type: String,
    label: "Clase",
    autoform: {
      options: [
        {"label": "Actividades", "value": "Actividades"},
        {"label": "Colegios", "value": "Colegios"},
        {"label": "Jardines", "value": "Jardines"},
      ],
      afField: {
        firstOption: "(Selecciona una clase)"
      }
    }
  },
  url: {
    type: String,
    label: "URL"
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      return new Date();
    }
  },
  author: {
    type: String,
    autoValue: function() {
      return this.userId;
    }
  }
});
