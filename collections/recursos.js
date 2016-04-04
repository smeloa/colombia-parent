Recursos = new Mongo.Collection('recursos');

RecursosIndex = new EasySearch.Index({
  collection: Recursos,
  fields: ['nombre'],
  engine: new EasySearch.MongoDB({
    sort: () => ['nombre']
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

AddressSchema = new SimpleSchema({

})

RecursosSchema = new SimpleSchema({
  nombre: {
    type: String,
    label: "Nombre"
  },
  descripcion: {
    type: String,
    label: "Descripción"
  },
  clase: {
    type: String,
    label: "Clase",
    allowedValues: ["Actividades", "Colegios", "Jardines"],
    autoform: {
      afFieldInput: {
        firstOption: "(Selecciona una clase)"
      }
    }
  },
  url: {
    type: String,
    label: "URL"
  },
  direccion: {
    type: String,
    label: "Dirección"
  },
  zip: {
    type: String,
    label: "Zipcode"
  },
  createdAt: {
    type: Date,
    autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
  },
  author: {
		type: String,
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
});

Recursos.attachSchema(RecursosSchema);
