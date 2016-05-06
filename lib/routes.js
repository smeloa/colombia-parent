FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout', {main: 'Inicio'});
	}
});

// FlowRouter.route('/actividades', {
// 	name: 'actividades',
// 	action() {
// 		BlazeLayout.render('HomeLayout', {main: 'Actividades'});
// 	}
// });
//
// FlowRouter.route('/jardines', {
// 	name: 'jardines',
// 	action() {
// 		BlazeLayout.render('HomeLayout', {main: 'Jardines'});
// 	}
// });
//
// FlowRouter.route('/colegios', {
// 	name: 'colegios',
// 	action() {
// 		BlazeLayout.render('HomeLayout', {main: 'Colegios'});
// 	}
// });

FlowRouter.route('/about', {
	name: 'about',
	action() {
		BlazeLayout.render('HomeLayout', {main: 'About'});
	}
});

FlowRouter.route('/insertarrecurso', {
	name: 'insertarrecurso',
	action() {
		BlazeLayout.render('HomeLayout', {main: 'InsertarRecurso'});
	}
});
