Template.ActivityHomeDisplay.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe("Recursos");
	});
});

Template.ActivityHomeDisplay.helpers(
  return Recipes.find({clase:"Actividades"});
)
