Template.Actividades.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe("recursos");
	});
});

Template.Actividades.helpers({
	recursos: function() {
		return Recursos.find({});
	}
});
