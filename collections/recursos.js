Recursos = new Mongo.Collection('recursos');

RecursosIndex = new EasySearch.Index({
  collection: Recursos,
  fields: ['nombre', 'city', 'clase'],
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
  tipo: {
    type: String,
    allowedValues: ["Calle", "Carrera", "Diagonal", "Transversal", "Avenida"],
    autoform: {
      afFieldInput: {
        firstOption: "(Selecciona una opción)"
      }
    }
  },
  indicadortipo: {
    type: String,
    label: "Numero-Tipo"
  },
  numero: {
    type: String,
    label: "Numero"
  },
  city: {
    type: String,
    label: "Ciudad"
  }
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
  fecha: {
    type: Date,
    label: "Fecha"
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
  costo: {
    type: Number,
    label: "Costo"
  },
  url: {
    type: String,
    label: "URL"
  },
  direccion: {
    type: AddressSchema
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
