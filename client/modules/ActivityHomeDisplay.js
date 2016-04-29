Template.ActivityHomeDisplay.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe("recursos");
	});
});

Template.ActivityHomeDisplay.helpers({
	recursos: function() {
		// return Recursos.find({});
		return RecursosIndex;
	}
});
