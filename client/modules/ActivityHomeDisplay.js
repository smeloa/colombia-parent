// Template.ActivityHomeDisplay.onCreated(function(){
// 	var self = this;
// 	self.autorun(function(){
// 		self.subscribe("recursos");
// 	});
// });

Template.ActivityHomeDisplay.helpers({
    recursos: function() {
        return RecursosIndex;
    },
    inputAttributes: function() {
        return {
            class: 'form-control',
						placeholder: 'Busca una actividad...'
        };
    }
});
