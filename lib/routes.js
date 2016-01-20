FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout', {main: 'Inicio'});
	}
});

FlowRouter.route('/recursos', {
	name: 'actividades',
	action() {
		BlazeLayout.render('HomeLayout', {main: 'Recursos'});
	}
});
