module.exports = function(app){

	var categoria = app.controllers.categorias;
	
	app.route('/categorias').get(categoria.index);

	app.route('/categorias/create')
		.get(categoria.create)
		.post(categoria.post);
}