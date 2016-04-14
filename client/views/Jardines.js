Template.Jardines.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe("recursos");
	});
});

Template.Jardines.helpers({
	recursos: function() {
		return Recursos.find({});
	}
});
