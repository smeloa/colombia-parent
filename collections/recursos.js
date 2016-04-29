Recursos = new Mongo.Collection('recursos');

RecursosIndex = new EasySearch.Index({
    collection: Recursos,
    fields: ['clase', 'direccion.city'],
    engine: new EasySearch.MongoDB({
      sort: () => ['fechaStart']
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
    allowedValues: ["Bogotá", "Medellin"],
    autoform: {
      afFieldInput: {
        firstOption: "(Selecciona una opción)"
      }
    }
  }
});

RecursosSchema = new SimpleSchema({
  nombre: {
    type: String,
    label: "Nombre"
  },
  descripcion: {
    type: String,
    label: "Descripción"
  },
  fechaStart: {
    type: Date,
    label: "Fecha inicio"
  },
  fechaEnd: {
    type: Date,
    label: "Fecha fin"
  },
  clase: {
    type: String,
    label: "Tipo de actividad",
    allowedValues: ["Teatro", "Concierto", "Taller", "Otros"],
    autoform: {
      afFieldInput: {
        firstOption: "(Selecciona un tipo de actividad)"
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
