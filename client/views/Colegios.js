Template.Colegios.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe("recursos");
	});
});

Template.Colegios.helpers({
	recursos: function() {
		return Recursos.find({});
	}
});