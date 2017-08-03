// module.exports = function(app){

// 	var conta = app.controllers.contas;

// 	app.route('/contas').get(conta.index);

// 	app.route('/contas/create')
// 		.get(conta.create)
// 		.post(conta.post);

// 	app.route('/contas/delete/:id').post(conta.delete);

// 	app.route('/contas/edit/:id')
// 		.get(conta.edit)
// 		.post(conta.update);
// }

module.exports = function(app){

	var conta = app.controllers.contas;

	app.route('/contas').get(conta.index);
		
	app.route('/contas/create')
		.get(conta.create)
		.post(conta.post);

	app.route('/contas/delete/:id').post(conta.delete);
	// app.route('/restaurantes/edit/:id').get(restaurante.edit).post(restaurante.update);
	//app.route('/restaurantes').post(restaurante.search);
}